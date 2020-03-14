import {combineReducers} from 'redux';

import data from './data';
import filter from './filter';
import page from './page';
import select from './select';
import visibility_column from './visibility_column';
import rowselect from './rowselect';

const reducer = combineReducers({data,filter,page, select, visibility_column, rowselect});

export default reducer;