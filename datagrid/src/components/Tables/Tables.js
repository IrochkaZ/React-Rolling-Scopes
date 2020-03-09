import React, { Component }from 'react';
import PropTypes from 'prop-types'
import { Table } from 'react-bootstrap';
import { connect } from 'react-redux'
import fetchAllItemsFromServer from '../../utils/fetch.js'
import { strCut } from '../../utils/common'; 
import Loader from '../loader/Loader.js'
import './styles/Table.css'

class Tables extends Component {

  componentDidMount() {
    this.props.fetchAllItemsFromServer();
 }

  render(){
    const { dataTable,headerTable } = this.props;
  
    const { tableHead } = headerTable;
    const { data, currentSort, isLoading } =  dataTable.data;
    if (isLoading) {
      return <Loader />;
    }
    let tHItem;
    let trItem;
    
    if (data) {
    tHItem = tableHead.map((item) => <th key={ item }>{item}
      <div className ="icons">
          <i className="active sort-up glyphicon glyphicon-triangle-top"></i>
          <i className="sort-down glyphicon glyphicon-triangle-bottom"></i>
      </div>
    </th>)
    trItem = data.map((i)=> <tr key ={i.id}>
      <td>{i.id}</td>
      <td className = "first_name">{i.first_name}</td>
      <td className = "last_name">{strCut(i.last_name)}</td>
      <td>{i.car_year}</td>
      <td>{i.gender}</td>
      <td>{`${i.date}`}</td>
      <td >{i.credit_type}</td>
      <td className = "credit_card">{`${i.credit_card}`.toLocaleString('en-US')}</td>
      </tr> );
    }

    return (
  <div className='table-fixhead'>
    <Table  className= "responsive-table table"striped bordered hover responsive>
    <thead >
      <tr >
        {tHItem}
      </tr>
    </thead>
    <tbody>
      <tr>
        <td></td>
      </tr>
      <tr>
      <td></td>
      </tr>
       {trItem}
    </tbody>
  </Table>
  </div>
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