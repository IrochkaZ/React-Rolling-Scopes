import React from 'react';
import Buttons from '../buttons/index';
import './month.css';


function Month() {
  const month = [36, 48, 60, 72, 84];
  return (
   <div>
     <p>Term (Month)</p>
    <Buttons info={month}/>
   </div>
  );
}

export default Month;
