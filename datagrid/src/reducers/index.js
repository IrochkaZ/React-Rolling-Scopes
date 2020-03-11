import {combineReducers} from 'redux';

import data from './data';
import filter from './filter';
import page from './page';
import select from './select'

const reducer = combineReducers({data,filter,page, select});

export default reducer;