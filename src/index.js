import React from 'react';
import ReactDOM from 'react-dom';
import Media from './components/media/media.js';
import Playlist from './components/playlist/playlist.js';
import data from './api.json';

ReactDOM.render(<Playlist data={data} />, document.getElementById('root')); 

