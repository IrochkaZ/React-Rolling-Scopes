import React from 'react';
import "./style.css";
import CsvDownload from 'react-json-to-csv'

export default function CSV(props){
  const {data, filter, select, rowdelete} = props;
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

  return(
    <div className ="scvWrapper">
    <CsvDownload className ="scv"
    data={dataPrepare(data, select, rowdelete)}
    filename={`data_${new Date().toDateString()}.csv`}
    style={{ 
      boxShadow:"inset 0px 1px 0px 0px #2fded4",
      background:"linear-gradient(to bottom, #00b8ae 5%, #0f756f 100%)",
      backgroundColor:"#00b8ae",
      borderRadius:"6px",
      border:"1px solid #0f756f",
      display:"inline-block",
      cursor:"pointer","color":"#ffffff",
      fontSize:"15px",
      fontWeight:"bold",
      padding:"6px 24px",
      textDecoration:"none",
      textShadow:"0px 1px 0px #0f756f"
      }}
  >
    ⬇   export to CSV
  </CsvDownload>
  </div>
  )
}
