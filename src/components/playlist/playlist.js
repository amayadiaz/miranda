import React from 'react';
import Media from '../media/media.js';

class Playlist extends React.Component {
    render(){

        const playlist = this.props.data.playlist;
        
        return(
            <div>
                {
                    playlist.map((item)=>{
                        return <Media {...item} key={item.id} />
                    })
                }
                
            </div>
        );
    }
}

export default Playlist;