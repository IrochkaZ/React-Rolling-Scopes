const FETCH_ALL_ITEMS = 'FETCH_ALL_ITEMS'
const FETCH_ALL_ITEMS_SUCCESS = 'FETCH_ALL_ITEMS_SUCCESS'
const FETCH_ALL_ITEMS_ERROR = 'FETCH_ALL_ITEMS_ERROR'

export default function fetchAllItemsFromServer() {
  return (dispatch, getState) => {
    dispatch({type: FETCH_ALL_ITEMS})
    fetch('https://api.myjson.com/bins/7mz4q')
      .then(res => res.toJSON())
      .then(items => dispatch({type: FETCH_ALL_ITEMS_SUCCESS, payload: items}))
      .catch(errors => dispatch({type: FETCH_ALL_ITEMS_ERROR, errors: errors}))
  }
}