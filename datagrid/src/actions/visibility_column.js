export const VISIBILITY_COLUMN = 'VISIBILITY_COLUMN'

export function visibilityCol (visibility_column){
  return{
    type : VISIBILITY_COLUMN,
    visibility_column
  };
}