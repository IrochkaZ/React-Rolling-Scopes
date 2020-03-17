import React from 'react';

import './style.css';
import Loader from '../loader/Loader.js';

export default function Portal() {

    return (
        <div className="preloader">
            <Loader />
        </div>
    );
}
