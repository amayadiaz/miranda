import React from 'react';
import './video.css';

class Video extends React.Component{

    togglePlay() {
        if (this.props.pause) {
            this.video.play();
        }else{
            this.video.pause();
        }
    }

    componentWillReceiveProps(nextProps){
        if (nextProps.pause != this.props.pause) {
            this.togglePlay();
        }
    }

    setRef = element => {
        this.video = element;
    }

    render(){
        return (
            <div className="Video">
                <video ref={this.setRef} autoPlay={this.props.autoplay} src={this.props.src} ></video>
            </div>
        )
    }
}

export default Video;