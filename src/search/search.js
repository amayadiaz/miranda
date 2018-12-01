import React from 'react';
import './search.css';

// New way to declare a function. The return is implicit.  
const Search = (props) => (
    <form className="Search" onSubmit={props.handleSubmit}>
        <input ref={props.setRef} placeholder="Buscar" type="text" defaultValue="" />
    </form>
)

export default Search;