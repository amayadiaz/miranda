import React from 'react';
import VideoPlayer from './videoPlayer.js';

class VideoPlayerContainer extends React.Component {
    render(){
        return(
            <VideoPlayer>
                <video autoPlay width="100%" height="300" controls src={require('../resources/videos/trailer.mp4')} ></video>
            </VideoPlayer>
        )
    }
}

export default VideoPlayerContainer;