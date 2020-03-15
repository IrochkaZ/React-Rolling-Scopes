import {connect} from 'react-redux';
import DeleteButon from '../components/DeleteButton';
import { deleteRowsFromTable } from '../actions';

function mapStateToProps(state) {
  return {
      data: state.data,
      page: state.page,
      filter: state.filter,
      select: state.select,
      visibility_column: state.visibility_column,
      rowdelete: state.rowdelete,
      rowselect: state.rowselect
  };
}

function mapDispatchToProps(dispatch) {
  return {
     onDeleteRowsFromTable: rowdelete => dispatch(deleteRowsFromTable(rowdelete))
  }

}
const DeleteButtonWrapper = connect(mapStateToProps, mapDispatchToProps)(DeleteButon);

export default DeleteButtonWrapper;