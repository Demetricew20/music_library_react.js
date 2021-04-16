import React from 'react';
import './song.css'

function Song(props) {
    return (
        <div className='song'>
            <div className='cover'>
                <h1 className='title'>{props.song.title}</h1>
                <h4 className='artist'>{props.song.artist}</h4>
                <h4 className='album'>{props.song.album}</h4>
                <h4 className='releaseDate'>{props.song.releaseDate}</h4>
            </div>
        </div>
    );
}

export default Song;
