import React, { Component } from 'react';
import './info-card.css';

export default class InfoCard extends Component {
  render() {
    const { decription, data } = this.props;
    const infoCardDesriptionList = decription.map((item) => <div key ={item}>{item}</div>);
    const infoCardList = Object.values(data)
      .map((item) => <div key={ Math.random().toString(36).substr(2, 9)}>{ item }</div>);
    return (
     <div className='info-card'>
      <div className = 'info-card_description'>{infoCardDesriptionList}</div>
      <div>{infoCardList}</div>
     </div>
    );
  }
}
