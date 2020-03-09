
export const initialState = {
  data:[],
  sort: true,
  filter: true,
  errors: {},
  isLoading: false,
  currentSort: 'default',
}

export function dataTable(state = initialState, action) {
  switch (action.type) {
    case 'FETCH_ALL_ITEMS':
      return Object.assign({}, state, {
        isLoading: true,
        sort: false,
        filter: false,
        currentSort: 'default',
      })
    case 'FETCH_ALL_ITEMS_SUCCESS':
      return Object.assign({}, state, {
        isLoading: false,
        sort: true,
        filter: true,
        data: action.payload,
        currentSort: 'default',
      })
    case 'FETCH_ALL_ITEMS_ERROR':
      return Object.assign({}, state, {
        isLoading: false,
        sort: false,
        filter: false,
        data: action.errors,
        currentSort: 'default',
      })
    default:
      return state
    }
  }


export function sortTable (state, action){
  switch (action.type) {
    case 'UP':
        return{
          ...state,
          // data: state.data.datafirst_name.map((item)=> item.sort()),
          currentSort:'up',
        };
    case 'DOWN':
      return{
        ...state,
        // data: state.data.data.map((item)=> item.reverse()),
      };
    case 'DEFAULT':
      return{
        ...state,
        currentSort:'default',
      };
    default:
    return state;
  }
}

