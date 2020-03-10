import {connect} from 'react-redux';

import Pagination from '../components/Pagination';
import {setPage} from "../actions";

function mapStateToProps(state) {
    return {
        data: state.data,
        filter: state.filter
    }
}

function mapDispatchToProps(dispatch) {
    return {
        onSetPage: page => dispatch(setPage(page))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Pagination);