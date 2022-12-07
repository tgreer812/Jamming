
import React from 'react';
import { TrackList } from '../TrackList/TrackList';
import './Playlist.css';

export class Playlist extends React.Component {
  constructor(props) {
    super(props);
    this.handleNameChange = this.handleNameChange.bind(this);
  }

  handleNameChange(evt) {
    this.props.onNameChange(evt.target.value);
  }

  render() {
    return (
      <div className="Playlist">
        <input onChange={this.handleNameChange} defaultValue={'New Playlist'}/>
        <TrackList onRemove={this.props.onRemove} results={this.props.playlistTracks} isRemoval={true}/>
        <button 
          onClick={this.props.onSave} 
          className="Playlist-save">
          SAVE TO SPOTIFY
        </button>
      </div>
    );
  }
}

Playlist.defaultProps = {
  playlistTracks : []
}