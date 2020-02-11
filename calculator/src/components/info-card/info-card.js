/* eslint-disable max-len */
/* eslint-disable class-methods-use-this */
import React, { Component } from 'react';
import './info-card.css';
import bmwX6 from '../../assets/data/bmwX6.json';

// global.console.log(bmwX6);

export default class InfoCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      msrp: ' ',
      vehicle: ' ',
      name: ' ',
      phone: ' ',
      rating: ' ',
    };
  }

  componentDidMount() {
    Promise.resolve(bmwX6).then((data) => this.setState({
      msrp: data.msrp,
      vehicle: data.vehicle,
      name: data.name,
      phone: data.phone,
      rating: data.rating,
    }));
  }

  render() {
    const infoCardList = Object.values(this.state).map((item) => <div key={ Math.floor(Math.random() * 1000)}>{ item }</div>);
    return (
     <div>
       {infoCardList}
     </div>
    );
  }
}
