import React from 'react';

function Option(props) {
    return (
        <option key={props.key}>{props.name}</option>
    )
}

export default Option;