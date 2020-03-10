import { connect } from 'react-redux';

import {getFetchData} from '../actions';
import App from "../App";

function mapDispatchToProps(dispatch) {
    return {
        ongetFetchData: url => dispatch(getFetchData(url))
    };
}

const AppWrapper = connect(null, mapDispatchToProps)(App);

export default AppWrapper;