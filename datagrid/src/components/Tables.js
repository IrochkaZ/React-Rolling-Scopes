import React, { Component }from 'react';
import PropTypes from 'prop-types'
import { Table } from 'react-bootstrap';
import { connect } from 'react-redux'



class Tables extends Component {


  render(){
    const { tableHead } = this.props.headerTable;
    const tHItem = tableHead.map((item) => <th key={ item }>{item}</th>)
    return (<Table striped bordered hover size="sm">
    <thead>
      <tr>
        {tHItem}
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>1</td>
        <td>Mark</td>
        <td>Otto</td>
        <td>@mdo</td>
      </tr>
      <tr>
        <td>2</td>
        <td>Jacob</td>
        <td>Thornton</td>
        <td>@fat</td>
      </tr>
      <tr>
        <td>3</td>
        <td colSpan="2">Larry the Bird</td>
        <td>@twitter</td>
      </tr>
    </tbody>
  </Table>
  )
  }

}

const tableStateToProps = store => {
  return {
    headerTable: store.headerTable,
    dataTable: store.dataTable
  }
}

Tables.propTypes = {
  tableHead: PropTypes.array.isRequired
}
export default connect(tableStateToProps)(Tables)