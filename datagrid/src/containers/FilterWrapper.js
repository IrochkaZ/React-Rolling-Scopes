import { connect } from 'react-redux';

import Filter from '../components/Filter';
import { setFilter } from '../actions';

function mapDispatchToProps(dispatch) {
    return {
        onChangeFilter: filter => dispatch(setFilter(filter))
    }
}

export default connect(null, mapDispatchToProps)(Filter);