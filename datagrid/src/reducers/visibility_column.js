import {VISIBILITY_COLUMN } from '../actions'


function reducer (state = {}, action){
  switch(action.type){
    case VISIBILITY_COLUMN:
      return action.visibility_column;
      default:
        return state;
  }
}

export default reducer;