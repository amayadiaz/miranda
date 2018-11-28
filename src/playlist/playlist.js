import React from 'react';
import Media from '../media/media.js';
import Play from '../icons/components/play.js';
import Pause from '../icons/components/pause.js';
import Volume from '../icons/components/volume.js';
import FullScreen from '../icons/components/fullScreen.js';


function Playlist(props) {
    
    const playlist = props.data.playlist;
    
    return(
        <div className="Playlist">
            <div><Play size={40} color="#F64145" /><Pause size={40} color="#F64145" /><Volume size={40} color="#F64145" /><FullScreen size={40} color="#F64145" /></div>
            {
                playlist.map((item)=>{
                    return <Media {...item} key={item.id} />
                })
            }
        </div>
    );
    
}

export default Playlist;