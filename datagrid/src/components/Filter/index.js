import React from 'react';

import './style.css';

export default function Filter(props) {
    const {onChangeFilter} = props;

    return (
        <div className="filter">
            <label>
            Search the site
                <input type="text" className="search-field" onChange={(e) => {
                    e.preventDefault();
                    onChangeFilter(e.target.value || 'ALL');
                }}/>
            </label>
        </div>
    );
}
