import { connect } from 'react-redux';

import VisibilityColumn from "../components/VisibilityColumn";
import {visibilityCol} from "../actions";

function mapStateToProps(state){
  return{
    data:state.data,
    visibility_column: state.visibility_column
  }
}

function mapDispatchToProps(dispatch) {
  return {
     onVisibilityColumn:  visibility_column => dispatch(visibilityCol(visibility_column))
  }
}


export default connect (mapStateToProps, mapDispatchToProps)(VisibilityColumn);