import React from 'react';
import './buttons.css';

function Buttons(props) {
  const { info, currentValue } = props;
  const listItems = info.map((number) => {
    const className = (currentValue === number) ? 'menu activeItem' : 'menu';
    return <button className ={className} key={number}>{number}</button>;
  });

  return (
  <div>{listItems}</div>
  );
}
export default Buttons;
