export const ROW_DELETE = 'ROW_DELETE';

export function deleteRowsFromTable(rowdelete) {
    return {
        type: ROW_DELETE,
        rowdelete
    }
}