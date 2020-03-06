import { createStore, applyMiddleware, compose } from 'redux'
import thunk from "redux-thunk";
import { rootReducer} from '../reducers/index'


const composeEnhancers =
  typeof window === 'object' &&
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?   
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
    }) : compose;

// const enhancer = composeEnhancers(
//   applyMiddleware(...middleware),
//   // other store enhancers if any
// );

export const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)))
console.log(store.getState());