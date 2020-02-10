import React, { Component } from 'react';
import Buttons from '../buttons/index';
import './month.css';

export default class Month extends Component {
  constructor(props) {
    super(props);
    this.month = [12, 24, 36, 48, 72, 84];
    this.changeState = (st) => {
      const { cb } = this.props;
      return cb(st);
    };
  }

  render() {
    const { term } = this.props;
    return (
      <div>
        <p>Term (Month)</p>
        <Buttons info={this.month}
        currentValue = {term} changeFunc = {this.changeState}/>
    </div>
    );
  }
}
