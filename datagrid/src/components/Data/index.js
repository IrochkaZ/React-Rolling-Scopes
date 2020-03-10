import React from 'react';

import FilterWrapper from "../../containers/FilterWrapper";
import TableWrapper from "../../containers/TableWrapper";

export default function Data() {
    return (
        <div className={'table'}>
            <FilterWrapper/>
            <div className="Wrapper">
                <TableWrapper/>
            </div>
        </div>
    )
}