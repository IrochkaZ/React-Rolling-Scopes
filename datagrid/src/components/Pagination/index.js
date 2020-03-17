import React from 'react';
import { NavLink } from 'react-router-dom';
import './style.css';

export default function Pagination(props) {
    const {data, onSetPage, filter, select, rowdelete} = props;
    const filtrSearch = filter.toLowerCase().charAt(0).toUpperCase() + filter.slice(1);
    const dataPrepare = (datas, sel, todel) => {
      let dataOutput = datas;
      if(datas.length > 0 && filter !=='ALLDATA') {
          dataOutput = dataOutput.filter(data => data.id.toString().toLowerCase() === filter.toLowerCase() || data.firstName.toLowerCase() === filter.toLowerCase() || data.firstName.indexOf(filtrSearch.toLowerCase()) !== -1 || data.lastName.toLowerCase() === filter.toLowerCase() || data.lastName.indexOf(filtrSearch.toLowerCase()) !== -1 || data.email.toLowerCase() === filter.toLowerCase() || data.email.indexOf(filtrSearch.toLowerCase()) !== -1 || data.phone.toLowerCase() === filter.toLowerCase() || data.phone.indexOf(filtrSearch.toLowerCase()) !== -1 || data.address.streetAddress.toLowerCase() === filter.toLowerCase() || data.address.streetAddress.indexOf(filtrSearch.toLowerCase()) !== -1 || data.address.city.toLowerCase() === filter.toLowerCase() || data.address.city.indexOf(filtrSearch.toLowerCase()) !== -1 || data.address.state.toLowerCase() === filter.toLowerCase() || data.address.state.indexOf(filtrSearch.toLowerCase()) !== -1 || data.address.zip.toLowerCase() === filter.toLowerCase() || data.address.zip.indexOf(filtrSearch.toLowerCase()) !== -1 || data.description.toLowerCase() === filter.toLowerCase() || data.description.indexOf(filtrSearch.toLowerCase()) !== -1)
      }
     if(datas.length > 0 && sel.length > 0) {
          dataOutput = dataOutput.filter((item) => sel.includes(item.address.state));
      }
      if(datas.length > 0 && Object.values(todel).length > 0) {
          dataOutput = dataOutput.filter((item) => {
              return !Object.values(todel).includes(item.phone);
          });
      }
      return dataOutput;
  }
  let pagination=[];
  let length = dataPrepare(data, select, rowdelete).length/30;
     for (let i = 1; i <= Math.ceil(length); i++) {
           pagination.push(i);
         }
    return (
        <div className="pagination">
            {pagination.map(page => <NavLink
                                  key={page} to={`/table_data:${page}`}
                                        className={'link-to-table'}
                                        onClick={(e) => {
                                            onSetPage(page);
                                          }}>{page}</NavLink>)}
        </div>
    )

}
