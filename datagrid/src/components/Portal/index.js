import React from 'react';

import './style.css';
import Spinner from '../Spinner/Spinner.js';

export default function Portal() {

    return (
        <div className="preloader">
            <Spinner />
        </div>
    );
}
