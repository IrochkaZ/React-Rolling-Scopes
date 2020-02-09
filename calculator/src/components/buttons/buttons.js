import React from 'react';
import './buttons.css';

function Buttons(props) {
  const { info } = props;
  const listItems = info.map((number) => <button>{number}</button>);
  return (
  <div>{listItems}</div>
  );
}


export default Buttons;
