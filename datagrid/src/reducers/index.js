import { combineReducers } from 'redux'
import {headerTable } from './headerTable'
import {dataTable} from './dataTable'

export const rootReducer = combineReducers({
  headerTable: headerTable,
  dataTable: dataTable
})

