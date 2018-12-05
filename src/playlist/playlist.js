import React from 'react';
import Media from '../media/media.js';


function Playlist(props) {

    console.log(props.playlist);
    
    
    return(
        <div className="Playlist">

            {   
                props.playlist.map((item)=>{
                    return <Media handleClick={props.handleOpenModal} {...item} key={item.id} />
                })
            }
        </div>
    );
    
}

export default Playlist;