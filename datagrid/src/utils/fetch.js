
function fetchPostsRequest(){
  return {
    type: "FETCH_ALL_ITEMS"
  }
}

function fetchPostsSuccess(payload) {
  return {
    type: "FETCH_ALL_ITEMS_SUCCESS",
    payload
  }
}

function fetchPostsError() {
  return {
    type: "FETCH_ALL_ITEMS_ERROR"
  }
}

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