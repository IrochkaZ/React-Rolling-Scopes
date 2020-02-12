import React from 'react';
import {
  Container, Row, Col, Tabs, Tab,
} from 'react-bootstrap';
import Buttons from './components/buttons/index';
import Input from './components/inputs/index';
import Select from './components/select/index';
import InfoCard from './components/info-card/index';
import bmwX6 from './assets/data/bmwX6.json';


export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
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
        defaultPostCode: 220000,
        taxes: '',
      },
      vendorData: {
        msrp: ' ',
        vehicle: ' ',
        name: ' ',
        phone: ' ',
        rating: ' ',
      },
      visibility: {
        loan: true,
        lease: false,
      },
      validation: {
        tradeIn: false,
        downPayment: false,
      },

    };

    this.changeState = (state) => {
      this.setState(state);
    };
  }

  componentDidMount() {
    const { dataCalc, vendorData } = this.state;
    fetch('https://ipinfo.io/json?token=4edd489c251584')
      .then((res) => res.json())
      .then((json) => {
        dataCalc.defaultPostCode = json.postal;
        dataCalc.taxes = json.postal.split('').map((item) => item * 11).join(', ');
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


  render() {
    const {
      term, termSecond, mileage, creditScore, tradeIn, downPayment, apr, defaultPostCode, taxes,
    } = this.state.dataCalc;
    const month = [12, 24, 36, 48, 72, 84];
    const selectTerms = [24, 36, 48];
    const selectMileages = [10000, 12000, 15000];
    const selectCreditScore = [600, 650, 700, 750, 800, 850, 900];
    const infoCardDescription = ['MSRP', 'Vehicle name', 'Dealer name', 'Phone 📞', 'Dealer rating', 'Taxes'];
    const { dataCalc, vendorData } = this.state;
    const infoCardData = { ...vendorData, ...{ taxes } };

    return (
      <div className='wrapper'>
        <Container>
          <Row>
            <Col sm={6}>
              <Tabs defaultActiveKey="loan" transition={false} id="noanim-tab-example">
                <Tab eventKey="loan" title="Loan">
                  Loan
                  <Input defaultItem ={defaultPostCode} cb={this.changeState} data={dataCalc} stateKey = 'defaultPostCode' text ="Enter Post Code"/>
                  <Buttons defaultItem={term} info={month} text="Term(Month)" cb={this.changeState} data={dataCalc} stateKey = 'term'/>
                  <Input defaultItem={tradeIn} text ="Trade in value" label ="$" cb ={this.changeState} data={dataCalc} stateKey = 'tradeIn' />
                  <Input defaultItem={downPayment} text = "Down Payment" label ="$" cb ={this.changeState} data={dataCalc} stateKey = 'downPayment'/>
                  <Buttons defaultItem={creditScore} info={selectCreditScore} text = "Approx.Credit Score" cb ={this.changeState} data ={dataCalc} stateKey = 'creditScore'/>
                  <Input defaultItem={apr} text = "Estimeted APR" label ="%" cb ={this.changeState} data={dataCalc} stateKey = 'apr' />
                </Tab>
                <Tab eventKey="lease" title="Lease">
                  Lease
                  <Input defaultItem={tradeIn} text ="Trade in value" label="$" cb ={this.changeState} data={dataCalc} stateKey = 'tradeIn' />
                  <Input defaultItem={downPayment} text = "Down Payment" label="$" cb ={this.changeState} data={dataCalc} stateKey = 'downPayment'/>
                  <Input defaultItem ={defaultPostCode} cb={this.changeState} data={dataCalc} stateKey = 'defaultPostCode' text ="Enter Post Code"/>
                  <Select cb ={this.changeState} text = "Terms" info={selectTerms} data={dataCalc} defaultItem ={termSecond} stateKey = 'termSecond'/>
                  <Select cb ={this.changeState} text = "Mileages" info={selectMileages} data={dataCalc} defaultItem ={mileage}stateKey = 'mileage' />
                  <Select cb ={this.changeState} text = "Credit Score" info={selectCreditScore} data={dataCalc} defaultItem ={creditScore} stateKey = 'creditScore'/>
                </Tab>
              </Tabs>
            </Col>
            <Col sm={6}><InfoCard decription={infoCardDescription} data={infoCardData} /></Col>
          </Row>
        </Container>
      </div>
    );
  }
}
