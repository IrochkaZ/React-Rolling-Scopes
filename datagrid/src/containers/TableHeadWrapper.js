import { connect } from 'react-redux';

import TableHead from "../components/TableHead";
import {setDataSort} from "../actions";

function mapStateToProps(state) {
    return {
        data: state.data,
        visibility_column: state.visibility_column,
    };
}

function mapDispatchToProps(dispatch) {
    return {
        onSetDataSort: data => dispatch(setDataSort(data))
    };
}

const TableHeadWrapper = connect(mapStateToProps, mapDispatchToProps)(TableHead);

export default TableHeadWrapper;