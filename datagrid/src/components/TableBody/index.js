import React from 'react';
import ReactDOM from "react-dom";
import './style.css';
import Portal from "../Portal";
import { strCut } from '../../utils/utils'

export default function TableBody(props) {
    console.log(props);
    const {data, page, filter, select} = props;
    const filtrSearch = filter.toLowerCase().charAt(0).toUpperCase() + filter.slice(1);
    console.log(select);
    return (
        < tbody>
        {(data.length > 0) ? (filter === 'ALLDATA') ? data.map((data, index) => (index < 30 * page && index > 30 * page - 30)
         ? <tr key={data.phone}>
                        <td>{data.id}</td>
                        <td>{data.firstName}</td>
                        <td>{strCut(data.lastName)}</td>
                        <td>{data.email}</td>
                        <td>{data.phone}</td>
                        <td>
                            <b>city:</b> {data.address.city} <br/>
                            <b>state:</b> {data.address.state} <br/>
                            <b>street address:</b> {data.address.streetAddress} <br/>
                            <b>zip:</b> {data.address.zip}
                        </td>
                        <td>{data.description}</td>
                    </tr> : null)
               : data.filter(data => data.id.toString().toLowerCase() === filter.toLowerCase() || data.id.toString().indexOf(filtrSearch.toLowerCase()) !== -1 || data.firstName.toLowerCase() === filter.toLowerCase() || data.firstName.indexOf(filtrSearch.toLowerCase()) !== -1 || data.lastName.toLowerCase() === filter.toLowerCase() || data.lastName.indexOf(filtrSearch.toLowerCase()) !== -1 || data.email.toLowerCase() === filter.toLowerCase() || data.email.indexOf(filtrSearch.toLowerCase()) !== -1 || data.phone.toLowerCase() === filter.toLowerCase() || data.phone.indexOf(filtrSearch.toLowerCase()) !== -1 || data.address.streetAddress.toLowerCase() === filter.toLowerCase() || data.address.streetAddress.indexOf(filtrSearch.toLowerCase()) !== -1 || data.address.city.toLowerCase() === filter.toLowerCase() || data.address.city.indexOf(filtrSearch.toLowerCase()) !== -1 || data.address.state.toLowerCase() === filter.toLowerCase() || data.address.state.indexOf(filtrSearch.toLowerCase()) !== -1 || data.address.zip.toLowerCase() === filter.toLowerCase() || data.address.zip.indexOf(filtrSearch.toLowerCase()) !== -1 || data.description.toLowerCase() === filter.toLowerCase() || data.description.indexOf(filtrSearch.toLowerCase()) !== -1)
                    .map((data, index) => (index < 30 * page && index > 30 * page - 30) ?
                        <tr key={data.phone}>
                            <td>{data.id}</td>
                            <td>{data.firstName}</td>
                            <td>{data.lastName}</td>
                            <td>{data.email}</td>
                            <td>{data.phone}</td>
                            <td>
                                <b>city:</b> {data.address.city} <br/>
                                <b>state:</b> {data.address.state} <br/>
                                <b>street address:</b> {data.address.streetAddress} <br/>
                                <b>zip:</b> {data.address.zip}
                            </td>
                            <td>{data.description}</td>
                        </tr> : null)
            : ReactDOM.createPortal(<Portal/>, document.getElementById('portal'))
        }
        </tbody>
    )
}