import React, { Component } from 'react';
import './buttons.css';

export default class Buttons extends Component {
  constructor(props) {
    super(props);
    this.state = {
      active: null,
    };
    this.buttonOnClick = (ev) => {
      const { changeFunc } = this.props;
      changeFunc({ term: ev.target.innerText });
    };
  }

  render() {
    const { info, currentValue } = this.props;
    const listItems = info.map((number) => {
      const className = (currentValue === number) ? 'menu activeItem' : 'menu';
      return <button
      onClick = {this.buttonOnClick} className ={className} key={number}>{number}</button>;
    });
    return (
    <div>{listItems}</div>
    );
  }
}
