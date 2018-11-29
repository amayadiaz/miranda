import React from 'react';
import Playlist from '../playlist/playlist';
import './category.css';

function Category(props) {
    return(
        <div className="Category">
            <h2 className="title">{props.name}</h2>
            <Playlist handleOpenModal={props.handleOpenModal} playlist={props.playlist} />
        </div>
    )
}

export default Category;