import { SELECT_CITY } from '../actions';

function reducer(state = "ALLDATA", action) {
  switch (action.type) {
      case SELECT_CITY:
          return action.filter;
      default:
          return state;
  }
}

export default reducer;