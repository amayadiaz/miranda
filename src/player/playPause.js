import React from 'react';
import './playPause.css';
import Play from '../icons/play.js';
import Pause from '../icons/pause.js';

function PlayPause(props) {
    return(
        <div className="PlayPause">
            {
                props.pause ? 
                <button onClick={props.handleClick}>
                    <Play size={25} color="#F64145" />
                </button>
                :
                <button onClick={props.handleClick}>
                    <Pause size={25} color="#F64145"/>
                </button>

            }
        </div>
    )
}

export default PlayPause;