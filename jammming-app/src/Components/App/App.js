
import React from 'react';
import { SearchBar } from '../SearchBar/SearchBar'

import { SearchResults } from '../SearchResults/SearchResults'
import { Playlist } from '../Playlist/Playlist';
import './App.css';

export class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchResults : [],
      playlistName : "My playlist",
      playlistTracks : []
    };

    this.addTrack = this.addTrack.bind(this);
  }

  addTrack(track) {
    for (let i in this.state.searchResults) {
      if(this.state.searchResults[i].id === track.id) {
        console.log("Song already in playlist");
        return;
      }
    }
    console.log(typeof track);
    console.log("Adding track to playlist");

    // Make a copy of the array to modify (can also use spread operator in ES6)
    let newPlaylistTracks = this.state.playlistTracks.slice();
    newPlaylistTracks.push(track);
    this.setState({
      playlistTracks: newPlaylistTracks
    });
  }

  // handleClick(evt) {
  //   this.addTrack(evt.target);
  // }

  render() {
    return (
      <div>
        <h1>Ja<span className="highlight">mmm</span>ing</h1>
        <div className="App">
        <SearchBar />
          <div className="App-playlist">
          <SearchResults onAdd={this.addTrack} results={this.state.searchResults}/>
          <Playlist 
              playlistName={this.state.playlistName}
              playlistTracks={this.state.playlistTracks}
          />
          </div>
        </div>
      </div>
    );
  }
}
