import React from 'react';
import Playlist from '../../playlist/playlist';
import './category.css';

function Category(props) {
    return(
        <div>
            <h2 className="title">{props.name}</h2>
            <Playlist playlist={props.playlist} />
        </div>
    )
}

export default Category;