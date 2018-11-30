import React from 'react';

// New way to declare a function. The return is implicit.  
const Search = (props) => (
    <form className="Search" onSubmit={props.handleSubmit}>
        <input ref={props.setRef} placeholder="Buscar" type="text" defaultValue="Narcos" />
    </form>
)

export default Search;