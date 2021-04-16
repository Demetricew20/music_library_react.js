import React from 'react';
import Song from '../Song/song';
import './songViewer.css'


function SongViewer(props){
    return(
        <div className='row row-spacer align-items-center'>
            <div className='col-md-4'>
                {/* {Button here to move to the previous Song viewed} */}
                <button className='btn__controls' onClick={() => props.previousSong()}>Previous Song</button>
            </div>
            <div className='col-md-4'>
                {/* Display Song with Cover here  */}
                <Song song={props.song}/>
            </div>
            <div className='col-md-4'>
                {/* Button here to move to the next Song */}
                <button className='btn__controls' onClick={() => props.nextSong()}>Next Song</button>
            </div>
        </div>
    )
}

export default SongViewer