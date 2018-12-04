import React from 'react';
import VideoPlayer from './videoPlayer.js';
import Video from './video.js';
import Title from './title.js';
import PlayPause from './playPause.js';
import Timer from './timer.js';
import Controls from './controls.js';

class VideoPlayerContainer extends React.Component {
    
    state = {
        pause: true,
    }

    togglePlay = (event) => {
        this.setState({
            pause: (!this.state.pause)
        })
    }

    componentDidMount(){
        this.setState({
            pause: (!this.props.autoplay)
        })
    }

    handleLoadedMetadata = event =>{
        this.video = event.target;
        this.setState ({
            duration: this.video.duration
        })
    }

    render(){
        return(
            <VideoPlayer>
                <Title title="Rush - Trailer" />
                <Controls>
                    <PlayPause pause={this.state.pause} handleClick={this.togglePlay} />
                    <Timer duration={this.state.duration} />
                </Controls>
                <Video autoplay={this.props.autoplay} pause={this.state.pause} src={require('../resources/videos/trailer.mp4')} handleLoadedMetadata={this.handleLoadedMetadata}  />
            </VideoPlayer>
        )
    }
}

export default VideoPlayerContainer;