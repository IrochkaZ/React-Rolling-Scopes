import { ROW_DELETE } from '../actions';

function reducer(state = {}, action) {
    switch (action.type) {
        case ROW_DELETE:
            return action.rowdelete;

        default:
            return state;
    }
}

export default reducer;