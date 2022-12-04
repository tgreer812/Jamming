/*<div className="SearchResults">
  <h2>Results</h2>
  <!-- Add a TrackList component -->
</div>*/
import React from 'react';
import ReactDOM from 'react-dom';
import { TrackList } from '../TrackList/TrackList';
import './SearchResults.css';

export class SearchResults extends React.Component {
  render() {
    return (
      <div className="SearchResults">
        <h2>Results</h2>
        <TrackList />
      </div>
    );
  }
}