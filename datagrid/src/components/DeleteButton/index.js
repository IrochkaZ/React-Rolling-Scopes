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
    <div className='delete_row_button'>
      <Tooltip interactive placement="top" title ="Delete selected rows"><Button variant="danger" onClick = {onClickEvent}>&#128465;</Button></Tooltip>
    </div>
  )
}
