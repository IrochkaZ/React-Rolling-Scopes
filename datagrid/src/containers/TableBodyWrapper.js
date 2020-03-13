import { connect } from 'react-redux';
import TableBody from "../components/TableBody";

function mapStateToProps(state) {
    return {
        data: state.data,
        page: state.page,
        filter: state.filter,
        select: state.select,
        visibility_column: state.visibility_column
    };
}


const TableBodyWrapper = connect(mapStateToProps)(TableBody);

export default TableBodyWrapper;