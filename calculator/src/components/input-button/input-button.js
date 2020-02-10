import React, { Component } from 'react';
import './input-button.css';


export default class InputButton extends Component {
  constructor(props) {
    super(props);
    this.state = {
      default: 0,
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({ default: event.target.value });
  }

  render() {
    const { value } = this.props;
    return (
      <div>
          <div><div className="wrapper-but"><div className="icon">{value}</div></div>
          <input type='number' className ="input_number" value = {this.state.default} onChange={this.handleChange} /></div>
    </div>
    );
  }
}
