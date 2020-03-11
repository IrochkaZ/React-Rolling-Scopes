import React from 'react';

import FilterWrapper from "../../containers/FilterWrapper";
import TableWrapper from "../../containers/TableWrapper";
import SelectWrapper from '../../containers/SelectWrapper';

export default function Data() {
    return (
        <div className='table'>
            <FilterWrapper/>
            <SelectWrapper/>
            <div className="wrapper">
                <TableWrapper/>
            </div>
        </div>
    )
}