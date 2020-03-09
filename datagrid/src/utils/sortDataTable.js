import {sortUp, sortDown, sortDefault } from '../actions_creator/action_creator'

export default function sortDataTable (dispatch){
   return{
    sortUp: ()=> dispatch(sortUp()),
    sortDown: ()=> dispatch(sortDown()),
    sortDefault: ()=> dispatch(sortDefault()),
   }
 }


