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

        const { handleLoadedMetadata } = this.props;

        return (
            <div className="Video">
                <iframe  src={"https://www.youtube.com/embed/"+this.props.src+'?autoplay=1&mute=1'} frameBorder="0" allowFullScreen></iframe>
            </div>
        )
    }
}

export default Video;