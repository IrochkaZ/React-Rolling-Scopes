import React from 'react';
import { Button } from 'react-bootstrap';
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
                    const selValues = Array.prototype.map.call(e.target.selectedOptions, function(x){ return x.value })
                    onSelectCity(selValues)}}>{options}</select>
          <Button variant="primary" className ="select_button" onClick = {(e)=>{onSelectCity([])}}>Reset Select </Button>
    </div>
  )
}