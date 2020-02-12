import React, { Component } from 'react';
import {
  Button,
} from 'react-bootstrap';
import './buttons.css';

export default class Buttons extends Component {
  constructor(props) {
    super(props);
    this.buttonOnClick = (event) => {
      const { data, stateKey, cb } = this.props;
      const newValue = 1 * event.target.innerText;
      data[stateKey] = newValue;
      cb({ dataCalc: data });
    };
  }

  render() {
    const { info, text, defaultItem } = this.props;
    const listItems = info.map((number) => {
      const className = (defaultItem === number) ? 'menu activeItem' : 'menu';
      return <Button variant="primary" onClick={ this.buttonOnClick }
      className ={className} key={number} >{number}</Button>;
    });
    return (
    <div className= 'button_wraper'>
      <p className= 'text'>{text}</p>
      {listItems}
      </div>
    );
  }
}
