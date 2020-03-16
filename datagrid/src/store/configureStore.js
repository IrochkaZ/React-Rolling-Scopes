import {createStore, applyMiddleware, compose} from 'redux';
import thunk from 'redux-thunk';
import promise from 'redux-promise';
import state from './state.json';
import { saveState } from '../utils/localStorage/local';
import reducer from '../reducers';


const states = localStorage.getItem('state') ? JSON.parse(localStorage.getItem('state')) : state;

const composeEnhancers =
  typeof window === 'object' &&
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
    }) : compose;

const store = createStore(reducer, states, composeEnhancers(applyMiddleware(thunk, promise)));

store.subscribe(()=>{
  saveState(store.getState());
});

export default store;