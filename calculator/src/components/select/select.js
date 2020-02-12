/* eslint-disable implicit-arrow-linebreak */
import React, { Component } from 'react';
import './select.css';


export default class Select extends Component {
  constructor(props) {
    super(props);
    this.handleChange = (event) => {
      const { data, stateKey, cb } = this.props;
      const newValue = 1 * event.target.innerText;
      data[stateKey] = newValue;
      cb({ dataCalc: data });
    };
  }

  render() {
    const { info, text, defaultItem } = this.props;
    const optionsItem = info.map((item) =>
        <option key={item} value = {item} >
          {item} </option>);

    return (
      <div>
        <p>{text}</p>
        <select value={defaultItem} onChange={this.handleChange} >{optionsItem}</select>
      </div>
    );
  }
}
