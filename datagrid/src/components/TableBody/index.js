import React from 'react';
import ReactDOM from "react-dom";
import './style.css';
import Portal from "../Portal";

export default function TableBody(props) {
    const {data, page, filter} = props;
    const filtrSearch = filter.toLowerCase().charAt(0).toUpperCase() + filter.slice(1);
    return (
        < tbody>
        {(data.length > 0) ? (filter === 'ALLDATA') ? data.map((data, index) => (index < 30 * page && index > 30 * page - 30)
         ? <tr key={data.phone}>
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
                : data.filter(data => data.id.toString() === filter || data.id.toString().indexOf(filtrSearch) !== -1 || data.firstName === filter || data.firstName.indexOf(filtrSearch) !== -1 || data.lastName === filter || data.lastName.indexOf(filtrSearch) !== -1 || data.email === filter || data.email.indexOf(filtrSearch) !== -1 || data.phone === filter || data.phone.indexOf(filtrSearch) !== -1 || data.address.streetAddress === filter || data.address.streetAddress.indexOf(filtrSearch) !== -1 || data.address.city === filter || data.address.city.indexOf(filtrSearch) !== -1 || data.address.state === filter || data.address.state.indexOf(filtrSearch) !== -1 || data.address.zip === filter || data.address.zip.indexOf(filtrSearch) !== -1 || data.description === filter || data.description.indexOf(filtrSearch) !== -1)
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