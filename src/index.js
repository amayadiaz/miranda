import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import './index.css';

const movie ={
    img: "https://assets.hardwarezone.com/img/2013/09/RUSH_poster.jpg",
    title: "Rush",
    trailer: "https://www.youtube.com/watch?v=4XA73ni9eVs"
};

class MovieCard extends React.Component {

    handleClick = () =>{
        console.log(this.props.title);
    }
    
    render(){
        return (
            <div className="movie" onClick={this.handleClick}>
                <div className="cover">
                    <img src={this.props.img} className="img"></img>
                </div>
                <div className="information">
                    <h3 className="title">{this.props.title}</h3>
                    <a href={this.props.trailer} className="trailer" target="_blank"><span className="text">Watch Trailer</span><i className="fa fa-play icon" aria-hidden="true"></i></a>
                </div>
            </div>
        );
    }
}

MovieCard.propTypes = {
    image: PropTypes.string,
    title: PropTypes.string,
    trailer: PropTypes.string.isRequired 
}

ReactDOM.render(<MovieCard img={movie.img} alt={movie.alt} title={movie.title} trailer={movie.trailer} />, document.getElementById('root')); 

