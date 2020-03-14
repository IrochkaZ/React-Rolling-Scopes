export const ROW_SELECT = 'ROW_SELECT'

export function selectRowsToDelete (rowselect){
  return{
    type : ROW_SELECT,
    rowselect
  };
}