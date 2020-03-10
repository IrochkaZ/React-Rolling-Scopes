import {GET_DATA, SET_DATA_SORT} from '../actions';

function reducer(state = [], action) {
    switch (action.type) {
        case GET_DATA:
            return action.data;

        case SET_DATA_SORT:
            return action.data;

        default:
            return state;
    }
}

export default reducer;