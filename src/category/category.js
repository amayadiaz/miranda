import React from 'react';
import Option from './option.js';
import './category.css';

function Category(props) {
    return(
        <select className="Category">
            {
                props.data.categories.map((item)=>{
                    return <Option {...item} key={item.id} />
                })
            }
        </select>
    )
}

export default Category;