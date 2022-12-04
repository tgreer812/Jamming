/*
<div class="Playlist">
  <input value="New Playlist"/>
  <!-- Add a TrackList component -->
  <button class="Playlist-save">SAVE TO SPOTIFY</button>
</div> */

import React from 'react';
import { TrackList } from '../TrackList/TrackList';
import './Playlist.css';

export class Playlist extends React.Component {
  render() {
    return (
      <div className="Playlist">
        <input defaultValue={'New Playlist'}/>
        <TrackList playlistTracks={this.props.playlistTracks} isRemoval={true}/>
        <button className="Playlist-save">SAVE TO SPOTIFY</button>
      </div>
    );
  }
}

Playlist.defaultProps = {
  playlistTracks : []
}