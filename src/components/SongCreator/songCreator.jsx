import React, {Component} from 'react';
import './songCreator.css';


class SongCreator extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: '',
            artist: '',
            album: '',
            releaseDate: '',
        }

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);

    }

    handleChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        });
    }

    handleSubmit(event) {
        event.preventDefault();
        const song = {
            title: this.state.title,
            artist: this.state.artist,
            album: this.state.album,
            releaseDate: this.state.releaseDate,
        }
        this.props.addNewSong(song);
        this.setState({
            title: '',
            artist: '',
            album: '',
            releaseDate: '',
        })
    }

    render() {
        return (
            <div className='container-fluid form__container' >
                <hr />
                <span className='row no-gutters justify-content-center'>
                    <h3 className='creation__title'>Add a new song!</h3>
                </span>
                <form onSubmit={this.handleSubmit}>
                    <div className='input__container row no-gutters justify-content-between'>
                        <div className='col'>
                            <label>Title:</label>
                            <input type='text' name='title' value={this.state.title} onChange={this.handleChange} />
                        </div>
                        <div className='col'>
                            <label>Artist:</label>
                            <input type='text' name='artist' value={this.state.artist} onChange={this.handleChange} />
                        </div>
                        <div className='col'>
                            <label>Album:</label>
                            <input type='text' name='album' value={this.state.album} onChange={this.handleChange} />
                        </div>
                        <div className='col'>
                            <label>Release Date:</label>
                            <input type='text' name='releaseDate' value={this.state.releaseDate} onChange={this.handleChange} />
                        </div>
                        <div className='col-1 add__btn'>
                            <input type='submit' value='Add' />
                        </div>
                    </div>
                </form>
            </div>
        );
    }
}

export default SongCreator;