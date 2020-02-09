import React from 'react';
import InputButton from '../input-button/index';
import './inputs.css';

export default function Input(props) {
  return (
    <div>
      <p>{props.text}</p>
      <InputButton/>
    </div>
  );
}
