import React from 'react';
import './videoPlayer.css'; 

function VideoPlayer(props) {
    return (
        <div className="VideoPlayer">
            {props.children}
        </div>
    )
}

export default VideoPlayer;