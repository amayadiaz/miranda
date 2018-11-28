import React from 'react';
import ReactDOM from 'react-dom';
import Playlist from './playlist/playlist.js';
import data from './api.json';

ReactDOM.render(<Playlist data={data} />, document.getElementById('root')); 

