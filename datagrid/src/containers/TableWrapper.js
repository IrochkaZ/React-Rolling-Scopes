import {connect} from 'react-redux';

import TableWrap from "../components/TableWrap";

function mapStateToProps(state) {
    return {
        selectedRow: state.selectedRow
    };
}

const TableWrapper = connect(mapStateToProps)(TableWrap);

export default TableWrapper;