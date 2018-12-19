import React from 'react';
import SearchContainer from '../search/searchContainer.js';
import './menu.css';



function Menu(props) {
    return(
        <div className="Menu">
            <h1 className="title">MIRANDA TRAILERS</h1>
            <SearchContainer />
        </div>
    )
    
}

export default Menu;