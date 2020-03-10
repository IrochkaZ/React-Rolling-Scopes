import { SET_CURRENT_PAGE } from '../actions';

function reducer(state = 1, action) {
    switch (action.type) {
        case SET_CURRENT_PAGE:
            return action.page;

        default:
            return state;
    }
}

export default reducer;