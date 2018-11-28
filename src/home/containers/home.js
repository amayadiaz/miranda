import React from 'react';
import HomeLayout from '../components/homeLayout.js';
import Categories from '../../categories/components/categories.js';
import Menu from '../../menu/menu.js';



class Home extends React.Component{
    render(){
        return(
            <HomeLayout> 
                <Menu />
                <Categories categories={this.props.data.categories} />
            </HomeLayout>
        )
    }
}

export default Home