import { connect } from 'react-redux';

import SelectCity from '../components/SelectCity';
import { selectCity } from '../actions/';
// import { setFilter } from '../actions/';


function mapStateToProps(state) {
  return {
      data: state.data,
      filter: state.filter,
      select: state.select
  }
}
function mapDispatchToProps(dispatch) {
  return {
     onSelectCity: select => dispatch(selectCity(select))

  }

}


export default connect (mapStateToProps, mapDispatchToProps)(SelectCity);