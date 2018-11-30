import React from 'react';
import VideoPlayer from './videoPlayer.js';
import Video from './video.js';
import Title from './title.js';
import PlayPause from './playPause.js';

class VideoPlayerContainer extends React.Component {
    
    state = {
        pause: true,
    }

    togglePlay = (event) => {
        this.setState({
            pause: !this.state.pause,
        })
    }

    render(){
        return(
            <VideoPlayer>
                <Title title="Rush - Trailer" />
                <PlayPause pause={this.state.pause} handleClick={this.togglePlay} />
                <Video autoplay={true} src={require('../resources/videos/trailer.mp4')}  />
            </VideoPlayer>
        )
    }
}

export default VideoPlayerContainer;