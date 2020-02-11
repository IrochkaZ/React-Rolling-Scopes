/* eslint-disable implicit-arrow-linebreak */
import React, { Component } from 'react';
import './select.css';


export default class Select extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    const { info, text, defaultValue } = this.props;
    const optionsItem = info.map((item) =>
        <option key={item} selected ={ defaultValue === item}>
          {item} </option>);

    return (
      <div>
        <p>{text}</p>
        <select >{optionsItem}</select>
      </div>
    );
  }
}
