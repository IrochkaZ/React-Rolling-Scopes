/* eslint-disable class-methods-use-this */
import React from 'react';
import {
  Container, Row, Col, Tabs, Tab,
} from 'react-bootstrap';
import Month from './components/month/index';
import Input from './components/inputs/index';
import CreditScore from './components/creadit-score/index';


export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dataCalc: {
        tradeIn: 0,
        downPayment: 0,
        term: 24,
        creditScore: 0,
        apr: 0,
        mileage: 0,
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
  }

  render() {
    const { term } = this.state.dataCalc;
    return (
      <div className='wrapper'>
        <Container>
          <Row>
            <Col sm={6}>
              <Tabs defaultActiveKey="loan" transition={false} id="noanim-tab-example">
                <Tab eventKey="loan" title="Loan">
                  Loan
                  <Month term = {term}/>
                  <Input text ="Trade in value" value ="$"/>
                  <Input text = "Down Payment" value ="$"/>
                  <CreditScore/>
                  <Input text = "Estimeted APR" value ="%"/>
                </Tab>
                <Tab eventKey="lease" title="Lease">
                  Lease
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
