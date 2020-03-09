
export const initialState = {
  data:[],
  sort: true,
  filter: true,
  errors: {},
  isLoading: false,
  currentSort: 'up',
}

export function dataTable(state = initialState, action) {
  switch (action.type) {
    case 'FETCH_ALL_ITEMS':
      return Object.assign({}, state, {
        isLoading: true,
        sort: false,
        filter: false,
        currentSort: 'up',
      })
    case 'FETCH_ALL_ITEMS_SUCCESS':
      return Object.assign({}, state, {
        isLoading: false,
        sort: true,
        filter: true,
        data: action.payload,
        currentSort: 'up',
      })
    case 'FETCH_ALL_ITEMS_ERROR':
      return Object.assign({}, state, {
        isLoading: false,
        sort: false,
        filter: false,
        data: action.errors,
        currentSort: 'up',
      })
    default:
      return state
    }
  }


