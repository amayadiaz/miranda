import React from 'react';
import Category from '../category/category.js';
import SearchContainer from '../search/searchContainer.js';



function Categories(props) {
    return(
        <div className="Categories">
            <SearchContainer />
           {    
               props.categories.map((item) =>{
                return <Category key={item.id} {...item} handleOpenModal={props.handleOpenModal} />
               })
           } 
        </div>
    )
}

export default Categories;