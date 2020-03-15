import React from 'react';
import {NavLink} from 'react-router-dom';
import './App.css';
import Header from "./components/Header";

function App(props) {
    const { ongetFetchData } = props;
    const dataUrl = 'https://irochkaz.github.io/RRS-Netlify/data/tabledata.json';
    // const dataUrl = 'http://www.filltext.com/?rows=1000&id=%7Bnumber%7C1000%7D&firstName=%7BfirstName%7D&delay=3&lastName=%7BlastName%7D&email=%7Bemail%7D&phone=%7Bphone%7C(xxx)xxx-xx-xx%7D&address=%7BaddressObject%7D&description=%7Blorem%7C32%7D';
    return (
        <div className="App">
            <Header text={'Please, go to the data table'}/>
            <div className="links clearfix">
                <NavLink to={'/table_data'}
                className={'link_table'} onClick={() => {
                    ongetFetchData(dataUrl);
                }}>
                    Table with Data
                </NavLink>
            </div>
        </div>)
}

export default App;
