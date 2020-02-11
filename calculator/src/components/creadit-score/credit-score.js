import React from 'react';
import Buttons from '../buttons/index';
import './credit-score.css';

function CreditScore() {
  const credit = ['Poor 639 or less', 'Fair 640-699', 'Good 700-749', 'Excellent 750-850'];
  return (
   <div>
     <p>Approx. Credit Score</p>
    <Buttons info={credit}/>
   </div>
  );
}

export default CreditScore;
