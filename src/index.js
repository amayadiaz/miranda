import React from 'react';
import ReactDOM from 'react-dom';
import Miranda from './miranda.js';
import data from './api.json';
import './index.css';

const homeContainer = document.getElementById('miranda');

ReactDOM.render(<Miranda data={data} />, homeContainer); 

