import { connect } from 'react-redux';
import TableBody from "../components/TableBody";
import {selectRowsToDelete} from '../actions';

function mapStateToProps(state) {
    return {
        data: state.data,
        page: state.page,
        filter: state.filter,
        select: state.select,
        visibility_column: state.visibility_column,
        rowselect: state.rowselect,
        rowdelete: state.rowdelete
    };
}

function mapDispatchToProps(dispatch) {
    return {
       onSelectRowToDelete: rowselect => dispatch(selectRowsToDelete(rowselect))
    }
  
  }


const TableBodyWrapper = connect(mapStateToProps, mapDispatchToProps)(TableBody);

export default TableBodyWrapper;