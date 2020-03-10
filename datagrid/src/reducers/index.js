import {combineReducers} from 'redux';

import data from './data';
import filter from './filter';
import page from './page';


const reducer = combineReducers({data,filter,page});

export default reducer;