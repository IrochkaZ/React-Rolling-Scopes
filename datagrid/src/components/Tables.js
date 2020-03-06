import React, { Component }from 'react';
import PropTypes from 'prop-types'
import { Table } from 'react-bootstrap';
import { connect } from 'react-redux'
import fetchAllItemsFromServer from '../utils/fetch.js'
class Tables extends Component {
  componentDidMount() {
    this.props.fetchAllItemsFromServer();
 }

  render(){
    const { tableHead } = this.props.headerTable;
    const { data } =  this.props.dataTable.data;
    let tHItem;
    let trItem;
    if (data) {
    tHItem = tableHead.map((item) => <th key={ item }>{item}</th>)
    trItem = data.map((i)=> <tr>
      <td>{i.id}</td>
      <td>{i.first_name}</td>
      <td>{i.last_name}</td>
      <td>{i.car_year}</td>
      <td>{i.gender}</td>
      <td>{i.date}</td>
      <td>{i.credit_type}</td>
      <td>{i.credit_card}</td>
      </tr> );
    }
   
    return (<Table striped bordered hover size="sm">
    <thead>
      <tr>
        {tHItem}
      </tr>
    </thead>
    <tbody>
       {trItem}
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
  tableHead: PropTypes.array
}
export default connect(tableStateToProps, {fetchAllItemsFromServer})(Tables)