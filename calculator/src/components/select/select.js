/* eslint-disable implicit-arrow-linebreak */
import React, { Component } from 'react';
import './select.css';


export default class Select extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: props.defaultItem,
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  render() {
    const { info, text } = this.props;
    const optionsItem = info.map((item) =>
        <option key={item} value = {item} >
          {item} </option>);

    return (
      <div>
        <p>{text}</p>
        <select value={this.state.value} onChange={this.handleChange} >{optionsItem}</select>
      </div>
    );
  }
}
