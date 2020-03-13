export const SET_FILTER = 'SET_FILTER';
export const SELECT_CITY = 'SELECT_CITY';

export function setFilter(filter) {
    return {
        type: SET_FILTER,
        filter
    };
}

export function selectCity(select){
    return{
       type: SELECT_CITY,
       select
    }
  }