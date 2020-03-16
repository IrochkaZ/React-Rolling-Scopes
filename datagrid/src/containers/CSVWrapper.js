import {connect} from 'react-redux';
import CSV from '../components/CSV';

function mapStateToProps(state) {
  return {
      data: state.data,
      filter: state.filter,
      select: state.select,
      rowdelete: state.rowdelete,
  };
}

const CSVWrapper = connect(mapStateToProps)(CSV);

export default CSVWrapper;