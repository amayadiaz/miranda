import React from 'react';
import Media from '../media/media.js';
import Play from '../icons/components/play.js';


function Playlist(props) {
    
    const playlist = props.data.playlist;
    
    return(
        <div className="Playlist">
            <Play size={50} color="#F64145" />
            {
                playlist.map((item)=>{
                    return <Media {...item} key={item.id} />
                })
            }
        </div>
    );
    
}

export default Playlist;