import React from 'react';
import TextField from '@material-ui/core/TextField';
import './style.css';

export default function Filter(props) {
    const {onChangeFilter} = props;
    return (
        <div className="filter">
            <label>
            <h3>Search the site: </h3>
                <TextField  label="Search input"
                margin="normal"
                variant="outlined"
                type="text" className="search-field" onChange={(e) => {
                e.preventDefault();
                onChangeFilter(e.target.value || 'ALLDATA');
                }}/>
            </label>
        </div>

    );
}
