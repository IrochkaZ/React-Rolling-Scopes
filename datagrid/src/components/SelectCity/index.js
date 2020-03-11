import React from 'react';
import './style.css';


export default function SelectCity (props) {
  console.log(props);
      const {data, onSelectCity}  = props;
      const stateArray = (data.length > 0) ? data.map((data)=> data.address.state) : null;
      const uniqueState = [...(new Set(stateArray))];
      const options = uniqueState.map((item) =><option key ={item}>{item}</option>)
  return (
    <div className ="select">
          <h3>Choose a state: </h3>
          <select onChange={(e) => {
                    e.preventDefault();
                    onSelectCity(e.target.value)}}>{options} </select>
    </div>
  )
}