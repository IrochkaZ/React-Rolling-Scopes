import React, { Component } from 'react';
import Tooltip from '@material-ui/core/Tooltip';
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
    const {
      label, text, defaultItem, title,
    } = this.props;
    return (
      <div className = 'input_wrapper'>
        <Tooltip title={title} interactive><p className ='text'>{ text }</p></Tooltip>
        <div><div className="wrapper-but"><div className="icon">{label}</div></div>
        <input type='number' min= "0" step="1" className ="input_number" value = {defaultItem} onChange={this.onChange} /></div>
      </div>
    );
  }
}
