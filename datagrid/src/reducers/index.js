import { combineReducers } from 'redux'
import {headerTable } from './reducerHeaderTable'
import {dataTable} from './reducerDataTable'

export const rootReducer = combineReducers({
  headerTable: headerTable,
  dataTable: dataTable
})

