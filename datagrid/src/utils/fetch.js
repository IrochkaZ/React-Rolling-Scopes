import {fetchPostsRequest, fetchPostsSuccess,fetchPostsError } from '../actions_creator/action_creator'

export default function fetchAllItemsFromServer() {
  return (dispatch) => {
  dispatch(fetchPostsRequest());
  return fetchPosts().then(([response, json]) =>{
      if(response.status === 200){
      dispatch(fetchPostsSuccess(json))
    }
    else{
      dispatch(fetchPostsError())
    }
  })
}
}

function fetchPosts() {
const URL = "https://api.jsonbin.io/b/5e621fc8baf60366f0e4ad43";
return fetch(URL, { method: 'GET'})
   .then( response => Promise.all([response, response.json()]));
}