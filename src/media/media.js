import React from 'react';
import PropTypes from 'prop-types';
import './media.css';

class Media extends React.PureComponent {

    render(){
        return (
            <div className="Media">
                <div className="cover">
                    <img className="img" src={"https://image.tmdb.org/t/p/original"+ this.props.poster_path} ></img>
                </div>
                <div className="information">
                    <p className="score">{this.props.vote_average}<i className="fa fa-star icon" aria-hidden="true"></i></p>
                    <a className="trailer" onClick={this.props.handleClick} target="_blank"><i className="fa fa-play icon" aria-hidden="true"></i><span className="text">Watch Trailer</span></a>
                </div>
            </div>
        );
    }
}

Media.propTypes = {
    image: PropTypes.string,
    title: PropTypes.string,
    trailer: PropTypes.string
}

export default Media; 