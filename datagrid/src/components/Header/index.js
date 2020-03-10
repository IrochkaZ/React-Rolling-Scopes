import React from 'react';
import './style.css';

export default function Header(props) {
    return (
        <header className='header'>
            {props.text}
        </header>
    )
}