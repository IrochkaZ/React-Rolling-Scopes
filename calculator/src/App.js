/* eslint-disable no-mixed-operators */
import React from 'react';
import {
  Container, Row, Col, Tabs, Tab,
} from 'react-bootstrap';
import Buttons from './components/buttons/index';
import Input from './components/inputs/index';
import Select from './components/select/index';
import InfoCard from './components/info-card/index';
import bmwX6 from './assets/data/bmwX6.json';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';
import './App.css';


export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.defaultData = {
      dataCalc: {
        tradeIn: 0,
        downPayment: 0,
        term: 24,
        termSecond: 36,
        creditScore: 750,
        apr: 0,
        mileage: 12000,
        loan: 0,
        lease: 0,
        defaultPostCode: '0',
        taxes: '',
      },
      vendorData: {
        msrp: ' ',
        vehicle: ' ',
        name: ' ',
        phone: ' ',
        rating: ' ',
      },
      validation: {
        tradeIn: false,
        downPayment: false,
      },

    };

    this.state = (localStorage.getItem('session')) ? JSON.parse(localStorage.getItem('session')) : this.defaultData;

    this.changeState = (state) => {
      this.setState(state);
    };

    this.calculates = () => {
      const { dataCalc, vendorData } = this.state;
      const { msrp } = vendorData;
      const {
        tradeIn, downPayment, term, termSecond, creditScore, apr, mileage,
      } = dataCalc;

      let creditScoreValue = 0;
      if (creditScore === 600) {
        creditScoreValue += 1.2;
      } if (creditScore === 650) {
        creditScoreValue += 1.05;
      } if (creditScore === 750) {
        creditScoreValue += 1;
      } if ((creditScore === 800) || (creditScore === 850) || (creditScore === 900)) {
        creditScoreValue += 0.95;
      }

      dataCalc.loan = `${(((parseInt(msrp, 10)) - tradeIn - downPayment)
      / term * creditScoreValue * apr / 100).toFixed(0)} $ `;
      dataCalc.lease = `${((parseInt(msrp, 10) - tradeIn - downPayment)
      * mileage / 10000 / termSecond * creditScoreValue).toFixed(0)} $ `;


      return dataCalc;
    };
  }

  componentDidMount() {
    const { dataCalc, vendorData } = this.state;
    fetch('https://ipinfo.io/json?token=4edd489c251584')
      .then((res) => res.json())
      .then((json) => {
        dataCalc.defaultPostCode = json.postal;
        dataCalc.taxes = json.postal.split('').map((item) => item * 11);
        this.setState(dataCalc);
      });

    Promise.resolve(bmwX6).then((data) => {
      vendorData.msrp = `${data.msrp} $`;
      vendorData.vehicle = data.vehicle;
      vendorData.name = data.name;
      vendorData.phone = data.phone;
      vendorData.rating = data.rating;
      this.setState(vendorData);
    });
  }


  componentDidUpdate() {
    this.calculates();
    localStorage.setItem('session', JSON.stringify(this.state));
  }


  render() {
    const {
      term, termSecond, mileage, creditScore, tradeIn, downPayment,
      apr, defaultPostCode, taxes, loan, lease,
    } = this.state.dataCalc;

    const month = [12, 24, 36, 48, 72, 84];
    const selectTerms = [24, 36, 48];
    const selectMileages = [10000, 12000, 15000];
    const selectCreditScore = [600, 650, 700, 750, 800, 850, 900];
    const infoCardDescription = ['MSRP', 'Vehicle name', 'Dealer name', 'Phone 📞', 'Dealer rating', 'Taxes', 'Loan Price', 'Lease Price'];
    const { dataCalc, vendorData } = this.state;
    const infoCardData = { ...vendorData, ...{ taxes, loan, lease } };

    return (
      <div className='wrapper'>
        <Container>
        <h1 className ='header'>Lown and Lease calculator App</h1>
        <p className = "description_app">Calculate your monthly payment estimate on a used car loan or a new car loan and find a great deal on a vehicle near you.</p>
        <hr></hr>
          <Row>
            <Col sm={6}>
              <Tabs defaultActiveKey="loan" transition={false} id="noanim-tab-example">
                <Tab eventKey="loan" title="Loan" className = "title" >
                  <Input defaultItem ={defaultPostCode} title ="Plese, Enter Post Code" cb={this.changeState} data={dataCalc} stateKey = 'defaultPostCode' text ="Enter Post Code"/>
                  <Buttons defaultItem={term} info={month} text="Term(Month)" cb={this.changeState} data={dataCalc} stateKey = 'term'/>
                  <Input defaultItem={tradeIn} title ="value can’t be greater than ¼ of MSRP " text ="Trade in value" label ="$" cb ={this.changeState} data={dataCalc} stateKey = 'tradeIn' />
                  <Input defaultItem={downPayment} title ="value can’t be greater than ¼ of MSRP" text = "Down Payment" label ="$" cb ={this.changeState} data={dataCalc} stateKey = 'downPayment'/>
                  <Buttons defaultItem={creditScore} info={selectCreditScore} text = "Approx.Credit Score" cb ={this.changeState} data ={dataCalc} stateKey = 'creditScore'/>
                  <Input defaultItem={apr} title ="Plese, Enter APR" text = "Estimeted APR" label ="%" cb ={this.changeState} data={dataCalc} stateKey = 'apr' />
                </Tab>
                <Tab eventKey="lease" title="Lease" className = "title">
                <Input defaultItem ={defaultPostCode} title ="Plese, Enter Post Code" cb={this.changeState} data={dataCalc} stateKey = 'defaultPostCode' text ="Enter Post Code"/>
                  <Input defaultItem={tradeIn} title ="value can’t be greater than ¼ of MSRP" text ="Trade in value" label="$" cb ={this.changeState} data={dataCalc} stateKey = 'tradeIn' />
                  <Input defaultItem={downPayment} title ="value can’t be greater than ¼ of MSRP" text = "Down Payment" label="$" cb ={this.changeState} data={dataCalc} stateKey = 'downPayment'/>
                  <Select cb ={this.changeState} text = "Terms" info={selectTerms} data={dataCalc} defaultItem ={termSecond} stateKey = 'termSecond'/>
                  <Select cb ={this.changeState} text = "Mileages" info={selectMileages} data={dataCalc} defaultItem ={mileage}stateKey = 'mileage' />
                  <Select cb ={this.changeState} text = "Credit Score" info={selectCreditScore} data={dataCalc} defaultItem ={creditScore} stateKey = 'creditScore'/>
                </Tab>
              </Tabs>
            </Col>
            <Col sm={6}>
              <InfoCard decription={infoCardDescription} data={infoCardData} />
            </Col>
          </Row>
        </Container>
        </div>
    );
  }
}
