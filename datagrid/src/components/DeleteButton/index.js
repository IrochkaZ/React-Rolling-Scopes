import React from 'react';
import { Button } from 'react-bootstrap';
import './style.css';
import { Tooltip } from '@material-ui/core';

export default function DeleteButton (props){
   const {onDeleteRowsFromTable, rowdelete, rowselect} = props;
   const onClickEvent = () =>{
      const toDeleteState = Object.assign({}, rowselect, rowdelete);
      onDeleteRowsFromTable(toDeleteState);
   }
  return(
    <div className="deleteRowButton">
      <div className = "textDeleteRowButton"> Deleted <span>{Object.keys(rowdelete).length}</span> row(s) from the table</div>
      <Tooltip interactive placement="right" title ="Delete selected rows">
        <Button variant="danger" className = "deleteRow" onClick = {onClickEvent}>&#128465; Delete rows</Button>
      </Tooltip>
    </div>
  )
}
