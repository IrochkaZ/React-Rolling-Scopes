export const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';

export function setPage(page) {
    return {
        type: SET_CURRENT_PAGE,
        page
    }
}