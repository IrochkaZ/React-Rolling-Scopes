import { ROW_SELECT } from '../actions';

function reducer(state = {}, action) {
    switch (action.type) {
        case ROW_SELECT:
            return action.rowselect;

        default:
            return state;
    }
}

export default reducer;