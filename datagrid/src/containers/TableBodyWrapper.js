import { connect } from 'react-redux';
import TableBody from "../components/TableBody";

function mapStateToProps(state) {
    return {
        data: state.data,
        page: state.page,
        filter: state.filter
    };
}


const TableBodyWrapper = connect(mapStateToProps)(TableBody);

export default TableBodyWrapper;