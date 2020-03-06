import React, { Component }from 'react';
import PropTypes from 'prop-types'
import { Table } from 'react-bootstrap';
import { connect } from 'react-redux'
import fetchAllItemsFromServer from '../../utils/fetch.js'
import { strCut } from '../../utils/common'; 
import Loader from '../Loader/Loader.js'
import './styles/Table.css'
class Tables extends Component {
  
  componentDidMount() {
    this.props.fetchAllItemsFromServer();
 }

  render(){
    const { dataTable,headerTable } = this.props;
    if (dataTable.isLoading) {
      return <Loader />;
  }
    const { tableHead } = headerTable;
    const { data } =  dataTable.data;
    let tHItem;
    let trItem;
    if (data) {
    tHItem = tableHead.map((item) => <th key={ item }>{item}</th>)
    trItem = data.map((i)=> <tr key ={i.id}>
      <td>{i.id}</td>
      <td className = "first_name">{i.first_name}</td>
      <td className = "last_name" size="3">{strCut(i.last_name)}</td>
      <td>{i.car_year}</td>
      <td>{i.gender}</td>
      <td>{`${i.date}`}</td>
      <td >{i.credit_type}</td>
      <td className = "credit_card">{`${i.credit_card}`.toLocaleString('en-US')}</td>
      </tr> );
    }
    return (
    <Table striped bordered hover size="10" responsive>
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
  tableHead: PropTypes.array,
  data: PropTypes.array
}
export default connect(tableStateToProps, {fetchAllItemsFromServer})(Tables)