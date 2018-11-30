import React from 'react';
import './video.css';

class Video extends React.Component{
    render(){
        return (
            <div className="Video">
                <video autoPlay={this.props.autoplay} src={this.props.src} ></video>
            </div>
        )
    }
}

export default Video;