import React from 'react';
import ReactDOM from 'react-dom';
// import Playlist from './playlist/playlist.js';
import Home from './home/containers/home.js';
import data from './api.json';

ReactDOM.render(<Home data={data} />, document.getElementById('root')); 

