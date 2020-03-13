import { SELECT_CITY } from '../actions';

function reducer(state = [], action) {
  switch (action.type) {
      case SELECT_CITY:
          return action.select;
      default:
          return state;
  }
}

export default reducer;