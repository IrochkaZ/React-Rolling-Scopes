export const GET_DATA = 'GET_DATA';
export const SET_DATA_SORT = 'SET_DATA_SORT';

export function getFetchData(url) {
    return fetch(url)
        .then((response) => response.json())
        .then((data) => ({
            type: GET_DATA,
            data
        }))
        .catch(() => window.location = '/');
}

export function setDataSort(data) {
    return {
        type: SET_DATA_SORT,
        data
    }
}