import React from 'react';
import ReactDOM from "react-dom";
import './style.css';
import Portal from "../Portal";
import { strCut } from '../../utils/utils'

export default function TableBody(props) {
    const { data, page, filter, select, visibility_column } = props;
    const filtrSearch = filter.toLowerCase().charAt(0).toUpperCase() + filter.slice(1);   

   
    const setData = (datas) => {
        return datas.map((data, index) => {
            return ((index < 30 * page && index > 30 * page - 30) 
            ? <tr key={data.phone}>
                <td style={(visibility_column.id === false)? {display:'none'}: {display:''}}>{data.id}</td>
                <td style={(visibility_column.firstName === false)? {display:'none'}: {display:''}}>{data.firstName}</td>
                <td style={(visibility_column.lastName === false)? {display:'none'}: {display:''}}>{strCut(data.lastName)}</td>
                <td style={(visibility_column.email === false)? {display:'none'}: {display:''}}>{data.email}</td>
                <td style={(visibility_column.phone === false)? {display:'none'}: {display:''}}>{data.phone}</td>
                <td style={(visibility_column.address === false)? {display:'none'}: {display:''}}>
                    <b>city:</b> {data.address.city} <br/>
                    <b>state:</b> {data.address.state} <br/>
                    <b>street address:</b> {data.address.streetAddress} <br/>
                    <b>zip:</b> {data.address.zip}
                </td>
                <td style={(visibility_column.description === false)? {display:'none'}: {display:''}}>{data.description}</td>
            </tr> : null )
            });
    }

    const dataPrepare = (datas, sel) => {
        let dataOutput = datas;

        if(datas.length > 0 && filter !=='ALLDATA') {
            dataOutput = dataOutput.filter(data => data.id.toString().toLowerCase() === filter.toLowerCase() || data.firstName.toLowerCase() === filter.toLowerCase() || data.firstName.indexOf(filtrSearch.toLowerCase()) !== -1 || data.lastName.toLowerCase() === filter.toLowerCase() || data.lastName.indexOf(filtrSearch.toLowerCase()) !== -1 || data.email.toLowerCase() === filter.toLowerCase() || data.email.indexOf(filtrSearch.toLowerCase()) !== -1 || data.phone.toLowerCase() === filter.toLowerCase() || data.phone.indexOf(filtrSearch.toLowerCase()) !== -1 || data.address.streetAddress.toLowerCase() === filter.toLowerCase() || data.address.streetAddress.indexOf(filtrSearch.toLowerCase()) !== -1 || data.address.city.toLowerCase() === filter.toLowerCase() || data.address.city.indexOf(filtrSearch.toLowerCase()) !== -1 || data.address.state.toLowerCase() === filter.toLowerCase() || data.address.state.indexOf(filtrSearch.toLowerCase()) !== -1 || data.address.zip.toLowerCase() === filter.toLowerCase() || data.address.zip.indexOf(filtrSearch.toLowerCase()) !== -1 || data.description.toLowerCase() === filter.toLowerCase() || data.description.indexOf(filtrSearch.toLowerCase()) !== -1)
        }

       if(datas.length > 0 && sel.length > 0) {
            dataOutput = dataOutput.filter((item) => sel.includes(item.address.state));
        }
        return setData(dataOutput)
    }

    return (
        < tbody>
        {(data.length > 0) ? dataPrepare(data, select)
            : ReactDOM.createPortal(<Portal/>, document.getElementById('portal'))
        }
        </tbody>
    )
}