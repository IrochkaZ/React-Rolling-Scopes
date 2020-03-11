import { connect } from 'react-redux';

import SelectCity from '../components/SelectCity';
import {selectCity} from '../actions/';


function mapStateToProps(state) {
  return {
      data: state.data,
      filter: state.filter
  }
}
function mapDispatchToProps(dispatch) {
  return {
      onSelectCity: filter => dispatch(selectCity(filter))
  }
}

export default connect (mapStateToProps, mapDispatchToProps)(SelectCity);