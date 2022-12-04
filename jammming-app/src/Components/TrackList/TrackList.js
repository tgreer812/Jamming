/*<div class="TrackList">
    <!-- You will add a map method that renders a set of Track components  -->
</div>*/

import React from 'react';
import ReactDOM from 'react-dom';
import { Track } from '../Track/Track';
import './TrackList.css';

export class TrackList extends React.Component {
  render() {
    return (
        <div class="TrackList">
            {/*Add map method for rendering Track components */}
            <Track />
            <Track />
            <Track />
        </div>
    );
  }
}