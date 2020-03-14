import React from 'react';
import './style.css';



export default function VisibilityColumn (props){
 const { visibility_column, onVisibilityColumn } = props;
 let newState = Object.assign({}, visibility_column);
 const toggleCheckboxChange = (e) => {
  const getKey = e.target.getAttribute('name');
      newState[getKey] = !newState[getKey];
      onVisibilityColumn(newState);
 }

const checkedItem = Object.keys(visibility_column).map(item=>{
  return(
    <div key={item} className ="checkbox">
    <input type="checkbox" id="scales" name={item} 
    defaultChecked={visibility_column[item]}
    onChange ={toggleCheckboxChange}></input>
  <label className ="control control-checkbox" htmlFor={item}>{item}</label>
  </div>
  )
});
  return(
    <div className="visibility_column">
    <h3>Click on the checkboxes to Show/Hide Сolumns</h3>
      <div className="check_item">
        {checkedItem}
        </div>
    </div>
  )
}