import React, { Component } from 'react';
import './post-code.css';

export default class PostCode extends Component {
  constructor(props) {
    super(props);
    this.state = {
      defaultPostCode: ' ',
    };
    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    fetch('https://ipinfo.io/json?token=4edd489c251584')
      .then((res) => res.json())
      .then((json) => this.setState({ defaultPostCode: json.postal }));
  }

  handleChange(event) {
    this.setState({ defaultPostCode: event.target.value });
  }

  render() {
    const { text } = this.props;
    const { defaultPostCode } = this.state;
    return (
    <div>
          <p>{ text }</p>
          <input type ='number' onChange={this.handleChange} value = {defaultPostCode}></input>
    </div>
    );
  }
}
