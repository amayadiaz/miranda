import React from 'react';
import Category from './category.js';
import data from './categories.json';


class CategoryContainer extends React.Component{
    render(){
        return (
            <Category data={data} />
        )
    }
}

export default CategoryContainer;