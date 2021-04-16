import React, {Component} from 'react';
import TitleBar from './TitleBar/titleBar';
import SongViewer from './SongViewer/songViewer';
import SongCreator from './SongCreator/songCreator';
import Footer from './Footer/footer';

class App extends Component {
    constructor(props) {
        super(props);
        this.songs = [
            {title: "(Sittin' On) The Dock of the Bay", artist:'Otis Redding', album:'The Dock of the Bay', releaseDate:'1968-01-08'},
            {title: "Ain't That a Kick in the Head", artist:'Dean Martin', album:"This Time I'm Swinging", releaseDate:'1960-07-01'},
            {title: "L-O-V-E", artist:'Nat King Cole', album:'L-O-V-E', releaseDate:'1964-09-01'},
        ];
        this.state = {
            songNumber: 0
        }
    }

    addNewSong(song){
        this.songs.push(song);
        this.setState({
            songNumber: this.songs.length - 1
        });
    }

    goToNextSong(){
        let tempSongNumber = this.state.songNumber;
        tempSongNumber++;
        console.log(tempSongNumber);
        if(tempSongNumber === this.songs.length){
            tempSongNumber = 0;
        }
        this.setState({
            songNumber: tempSongNumber
        });
    }

    goToPreviousSong(){
        let tempSongNumber = this.state.songNumber;
        tempSongNumber--;
        console.log(tempSongNumber);
        if(tempSongNumber < 0){
            tempSongNumber = this.songs.length - 1;
        }
        this.setState({
            songNumber: tempSongNumber
        });
    }

    render() {
        return (
            <div className='container-fluid'>
                <TitleBar />
                <SongViewer song={this.songs[this.state.songNumber]} nextSong={() => this.goToNextSong()} previousSong={() => this.goToPreviousSong()}/>
                <SongCreator addNewSong={this.addNewSong.bind(this)}/>
                <Footer/>
            </div>
        );
    }
}

export default App;