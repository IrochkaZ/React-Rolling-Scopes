import React from 'react';
import Buttons from '../buttons/index';
import './month.css';


function Month(props) {
  const month = [12, 24, 36, 48, 72, 84];
  return (
   <div>
     <p>Term (Month)</p>
    <Buttons info={month} currentValue = {props.term}/>
   </div>
  );
}

export default Month;
