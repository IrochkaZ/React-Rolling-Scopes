import React from 'react';
import { Table } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css';
import TableHeadWrapper from "../../containers/TableHeadWrapper";
import TableBodyWrapper from "../../containers/TableBodyWrapper";
import PaginationWrapper from "../../containers/PaginationWrapper";

export default function TableWrap() {
    return (
        <div>
            <Table id="dataTable" className= "responsive-table table" striped bordered hover responsive>
                <TableHeadWrapper/>
                <TableBodyWrapper/>
            </Table>
            <PaginationWrapper/>
        </div>
    )
}