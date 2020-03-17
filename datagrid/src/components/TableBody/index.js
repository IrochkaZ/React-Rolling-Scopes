import React from 'react';
import ReactDOM from "react-dom";
import './style.css';
import Portal from "../Portal";
import { strCut } from '../../utils/utils'
import { Tooltip } from '@material-ui/core';


export default function TableBody(props) {
    const { data, page, filter, select, visibility_column, rowselect, rowdelete, onSelectRowToDelete} = props;
    const filtrSearch = filter.toLowerCase().charAt(0).toUpperCase() + filter.slice(1);   


    const hideShowCol = (el) => (!visibility_column[el])? {display:'none'}: {display:''}

    const setData = (datas) => {
        return datas.map((data, index) => {
            return ((index < 30 * page && index > 30 * page - 30) 
            ? <tr key={data.phone} attribute={data.phone}>
            <td style={hideShowCol('id')}>  
            <Tooltip interactive placement="top" title ="Select row to delete">
                <input type="checkbox" 
            onClick={ (e) => {
                const newSelRow = Object.assign({}, rowselect);
                const elId = e.target.parentElement.parentElement.getAttribute("attribute");
                (e.target.checked) ? newSelRow[elId] = elId : delete newSelRow[elId];
                onSelectRowToDelete(newSelRow);
            } 
               } ></input>
               </Tooltip>
            {data.id}
            </td>
                <td style={hideShowCol('firstName')}>{data.firstName}</td>
                <td style={hideShowCol('lastName')}>{strCut(data.lastName)}</td>
                <td style={hideShowCol('email')}>{data.email}</td>
                <td style={hideShowCol('phone')}>{data.phone}</td>
                <td style={hideShowCol('address')}>
                    <b>city:</b> {data.address.city} <br/>
                    <b>state:</b> {data.address.state} <br/>
                    <b>street address:</b> {data.address.streetAddress} <br/>
                    <b>zip:</b> {data.address.zip}
                </td>
                <td style={hideShowCol('description')}>{data.description}</td>
            </tr> : null )
            });
    }

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
        return setData(dataOutput);
    }

   
    return (
        < tbody>
        {(data.length > 0) ? dataPrepare(data, select, rowdelete)
            : ReactDOM.createPortal(<Portal/>, document.getElementById('portal'))
        }
        </tbody>
    )
}