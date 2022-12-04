
import React from 'react';
import { SearchBar } from '../SearchBar/SearchBar'

import { SearchResults } from '../SearchResults/SearchResults'
import { Playlist } from '../Playlist/Playlist';
import './App.css';
import { Track } from "../Track/Track";


export class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchResults : [
        <Track 
          name="Track name 1"
          artist="Track artist 1"
          album="Track album 1"
          id="1"
        />,
        <Track 
          name="Track name 2"
          artist="Track artist 2"
          album="Track album 2"
          id="2"
        />,
      ],
      playlistName : "My playlist",
      playlistTracks : [
        <Track 
          name="Spank me 1"
          artist="Billie's Eyelash 1"
          album="BaDDDD girl 1"
          id="3"
        />,
        <Track 
          name="Love gory 2"
          artist="Taylor's Swift 2"
          album="Hard beginnings 2"
          id="4"
        />,
      ]
    };

    this.addTrack = this.addTrack.bind(this);
    this.removeTrack = this.removeTrack.bind(this);
  }

  addTrack(track) {

    let overlap = this.state.playlistTracks.filter(x => x.props.id === track.props.id);
    if(overlap.length) {
      console.log("Song already in playlist!");
      return;
    }

    console.log("Adding track to playlist");

    // Make a copy of the array to modify (can also use spread operator in ES6)
    let newPlaylistTracks = this.state.playlistTracks.slice();
    newPlaylistTracks.push(track);
    console.log(newPlaylistTracks);
    this.setState({
      playlistTracks: newPlaylistTracks
    });
  }

  removeTrack(track) {
    let newPlaylistTracks = this.state.playlistTracks.slice();
    newPlaylistTracks = newPlaylistTracks.filter(t => t.props.id !== track.props.id);

    console.log(newPlaylistTracks);

    this.setState({
      playlistTracks : newPlaylistTracks
    });
  }



  render() {
    return (
      <div>
        <h1>Ja<span className="highlight">mmm</span>ing</h1>
        <div className="App">
        <SearchBar />
          <div className="App-playlist">
          <SearchResults onAdd={this.addTrack} searchTracks={this.state.searchResults}/>
          <Playlist 
            onRemove={this.removeTrack}
            playlistName={this.state.playlistName}
            playlistTracks={this.state.playlistTracks}  
          />
          </div>
        </div>
      </div>
    );
  }
}
