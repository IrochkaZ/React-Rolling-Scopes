module.exports = {

  fetchPostsRequest:()=>({
    type: "FETCH_ALL_ITEMS"
  }),
  
  fetchPostsSuccess: (payload)=> ({
    type: "FETCH_ALL_ITEMS_SUCCESS",
    payload
  }),
  
 fetchPostsError:()=> {
    return {
      type: "FETCH_ALL_ITEMS_ERROR"
    }
  }
};

