import React from 'react';
import Search from './search.js';

class SearchContainer extends React.Component{

    handleSubmit = event => {
        event.preventDefault();
        console.log(this.input.value);

        // Here you can send the post. 
    }

    setInputRef = element => {
        this.input = element;
    }

    render(){
        return(
            <Search setRef={this.setInputRef} handleSubmit={this.handleSubmit} />
        )
    }
}

export default SearchContainer;