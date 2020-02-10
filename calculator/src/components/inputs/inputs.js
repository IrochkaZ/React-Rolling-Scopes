import React from 'react';
import InputButton from '../input-button/index';
import './inputs.css';

export default function Input(props) {
  const { value, text } = props;
  return (
    <div>
      <p>{ text }</p>
      <InputButton value ={value}/>
    </div>
  );
}
