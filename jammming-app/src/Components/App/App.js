
import React from 'react';
import { SearchBar } from '../SearchBar/SearchBar'
import { SearchResults } from '../SearchResults/SearchResults'
import { Playlist } from '../Playlist/Playlist';
import './App.css';
import { Track } from "../Track/Track";
import Spotify from "../../util/Spotify";

export class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchResults : [],
      playlistName : "My playlist",
      playlistTracks : []
    };

    this.addTrack = this.addTrack.bind(this);
    this.removeTrack = this.removeTrack.bind(this);
    this.updatePlaylistName = this.updatePlaylistName.bind(this);
    this.savePlaylist = this.savePlaylist.bind(this);
    this.search = this.search.bind(this);
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

  updatePlaylistName(name) {
    this.setState({
      playlistName : name
    });
  }

  savePlaylist() {
    let trackUris = this.state.playlistTracks.map( track => track.props.uri);
    console.log(trackUris);
    const prom = Spotify.savePlaylist(this.state.playlistName, trackUris);
    prom
      .then(res => {
        //TODO: Clear playlist and reset playlist name, also alert the user somehow
        console.log("Saved");
      })
      .catch(err => {
        console.log("Failed to resolve savePlaylist promise");
      })
  }

  search(term) {
    const prom = Spotify.search(term);
    prom
      .then(res => {
        let newTrackList = res.map( track => {
          //alert(`Setting uri: ${track.URI}`);
          return (
            <Track
              name={track.Name}
              id={track.ID}
              artist={track.Artist}
              album={track.Album}
              uri={track.URI}
            />
          )
        });
        this.setState({
          searchResults : newTrackList
        });
      })
      .catch(err => {
        console.log("Failed to resolve search!");
      });
  }

  render() {
    return (
      <div>
        <h1>Ja<span className="highlight">mmm</span>ing</h1>
        <div className="App">
        <SearchBar onSearch={this.search}/>
          <div className="App-playlist">
          <SearchResults onAdd={this.addTrack} searchTracks={this.state.searchResults}/>
          <Playlist 
            onRemove={this.removeTrack}
            onNameChange={this.updatePlaylistName}
            onSave={this.savePlaylist}
            playlistName={this.state.playlistName}
            playlistTracks={this.state.playlistTracks}
          />
          </div>
        </div>
      </div>
    );
  }
}
