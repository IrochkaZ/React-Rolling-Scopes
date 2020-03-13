import React from 'react';
import "./style.css"
import FilterWrapper from "../../containers/FilterWrapper";
import TableWrapper from "../../containers/TableWrapper";
import SelectWrapper from '../../containers/SelectWrapper';
import VisibilityColumnWrapper from '../../containers/VisibilityColumnWrapper'

export default function Data() {
    return (
        <div className='table'>
            <div className = "custom_tools" >
                <FilterWrapper/>
                <SelectWrapper/>
                <VisibilityColumnWrapper/>
            </div>
            <div className="wrapper">
                <TableWrapper/>
            </div>
        </div>
    )
}