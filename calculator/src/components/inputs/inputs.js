import React, { Component } from 'react';
import './inputs.css';

export default class Input extends Component {
  constructor(props) {
    super(props);

    this.onChange = (event) => {
      const { cb, data, stateKey } = this.props;
      const newValue = 1 * event.target.value;
      data[stateKey] = newValue;
      cb({ dataCalc: data });
    };
  }

  render() {
    const { label, text, defaultItem } = this.props;
    return (
      <div>
        <p>{ text }</p>
        <div><div className="wrapper-but"><div className="icon">{label}</div></div>
        <input type='number' className ="input_number" value = {defaultItem} onChange={this.onChange} /></div>
      </div>
    );
  }
}
