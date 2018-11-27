import React from 'react';
import PropTypes from 'prop-types';
import './media.css';

class Media extends React.PureComponent {

    state = {
        // img: 'https://assets.hardwarezone.com/img/2013/09/RUSH_poster.jpg',
    }

    handleClick = () =>{

        /*this.setState({
            img: 'https://m.media-amazon.com/images/M/MV5BNjEyZGEyNDUtMTRlNS00ZTZiLWE3M2ItNWJkYjhhZDk3NzNhXkEyXkFqcGdeQXVyNTc3MjUzNTI@._V1_SY1000_CR0,0,701,1000_AL_.jpg',
        });*/

    }

    render(){
        return (
            <div className="movie" onClick={this.handleClick}>
                <div className="cover">
                    <img src={this.props.img} className="img"></img>
                </div>
                <div className="information">
                    <p className="title">{this.props.title}<i className="fa fa-star icon" aria-hidden="true"></i></p>
                    <a href={this.props.trailer} className="trailer" target="_blank"><i className="fa fa-play icon" aria-hidden="true"></i><span className="text">Watch Trailer</span></a>
                </div>
            </div>
        );
    }
}

Media.propTypes = {
    image: PropTypes.string,
    title: PropTypes.string,
    trailer: PropTypes.string.isRequired 
}

export default Media; 