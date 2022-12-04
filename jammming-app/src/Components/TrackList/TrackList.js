
import React from 'react';
import { Track } from '../Track/Track';
import './TrackList.css';

export class TrackList extends React.Component {
  
  render() {
    // track should be a <Track />
    const listItems = this.props.results.map((track) => {
      return (
        <li key={track.props.id}>
          <Track 
            name={track.props.name}
            artist={track.props.artist}
            album={track.props.album}
            id={track.props.id}
            onAdd={this.props.onAdd}
            onRemove={this.props.onRemove}
            isRemoval={this.props.isRemoval}    
          />
        </li>
      );
    });

    return (
        <div className="TrackList">
            <ul>{listItems}</ul>
        </div>
    );
  }
}
