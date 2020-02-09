import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import './scss/style.scss';

const rootContainer = document.createElement('div');
rootContainer.id = 'root';
document.body.append(rootContainer);

ReactDOM.render(<App/>, rootContainer);
