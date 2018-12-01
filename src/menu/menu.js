import React from 'react';
import SearchContainer from '../search/searchContainer.js';
import './menu.css';
import CategoryContainer from '../category/categoryContainer.js';


function Menu(props) {
    return(
        <div className="Menu">
            <h1 className="title">MIRANDA TRAILERS</h1>
            <SearchContainer />
            <CategoryContainer />
        </div>
    )
    
}

export default Menu;