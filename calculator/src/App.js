/* eslint-disable class-methods-use-this */
import React from 'react';
import {
  Container, Row, Col, Tabs, Tab,
} from 'react-bootstrap';
import Month from './components/month/index';
import Input from './components/inputs/index';
import CreditScore from './components/creadit-score/index';
import PostCode from './components/post-code/index';
import Select from './components/select/index';


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
      },
      vendorData: {
        msrp: 0,
        vehicle: '',
        name: '',
        phone: '',
        rating: '',
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

    this.changeState = (st) => {
      this.setState({ st });
    };
  }


  render() {
    const {
      term, termSecond, mileage, creditScore,
    } = this.state.dataCalc;
    const selectTerms = [24, 36, 48];
    const selectMileages = [10000, 12000, 15000];
    const selectCreditScore = [600, 650, 700, 750, 800, 850, 900];
    return (
      <div className='wrapper'>
        <Container>
          <Row>
            <Col sm={6}>
              <Tabs defaultActiveKey="loan" transition={false} id="noanim-tab-example">
                <Tab eventKey="loan" title="Loan">
                  Loan
                  <PostCode text ="Enter Post Code"/>
                  <Month term = {term} cb = {this.changeState}/>
                  <Input text ="Trade in value" value ="$"/>
                  <Input text = "Down Payment" value ="$"/>
                  <CreditScore/>
                  <Input text = "Estimeted APR" value ="%"/>
                </Tab>
                <Tab eventKey="lease" title="Lease">
                  Lease
                  <Input text ="Trade in value" value ="$"/>
                  <Input text = "Down Payment" value ="$"/>
                  <PostCode text ="Enter Post Code"/>
                  <Select text = "Terms" info={selectTerms} defaultValue ={termSecond} />
                  <Select text = "Mileages" info={selectMileages} defaultValue ={mileage} />
                  <Select text = "Credit Score" info={selectCreditScore} defaultValue ={creditScore}/>
                </Tab>
              </Tabs>
            </Col>
            <Col sm={6}>sm=6</Col>
          </Row>
        </Container>
      </div>
    );
  }
}
