/*<div class="TrackList">
    <!-- You will add a map method that renders a set of Track components  -->
</div>*/

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

// TrackList.defaultProps = {
//   results : [
//     <Track 
//       name="Track name 1"
//       artist="Track artist 1"
//       album="Track album 1"
//       id="1"
//     />,
//     <Track 
//       name="Track name 2"
//       artist="Track artist 2"
//       album="Track album 2"
//       id="2"
//     />,
//     <Track 
//       name="Track name 3"
//       artist="Track artist 3"
//       album="Track album 3"
//       id="3"
//     />
//   ]
// };