import React from 'react';
import './style.css';


export default function SelectCity (props) {
      const {data, onSelectCity}  = props;
      const stateArray = (data.length > 0) ? data.map((data)=> data.address.state) : null;
      const uniqueState = [...(new Set(stateArray))].sort();
      const options = uniqueState.map((item) =><option key ={item}>{item}</option>)
  return (
    <div className ="select">
          <h3>Choose a state: </h3>
          <select className="custom-select" multiple
          onChange={(e) => {
                    e.preventDefault();
                    onSelectCity(e.target.value)}}>{options}</select>
          <button onClick = {(e)=>{onSelectCity("ALLDATA")}}>Reset Select</button>
    </div>
  )
}