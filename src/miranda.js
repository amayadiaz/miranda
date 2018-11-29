import React from 'react';
import Home from './home/home.js';
import Categories from './categories/categories.js';
import Menu from './menu/menu.js';

class Miranda extends React.Component{
    render(){
        return(
            <Home> 
                <Menu />
                <Categories categories={this.props.data.categories} />
            </Home>
        )
    }
}

export default Miranda