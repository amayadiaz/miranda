import React from 'react';
import ReactDOM from 'react-dom';
import HomeContainer from './home/homeContainer.js';
import data from './api.json';
import './index.css';

const homeDiv = document.getElementById('miranda');


ReactDOM.render(<HomeContainer data={data} />, homeDiv); 

