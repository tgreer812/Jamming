/*<div className="SearchResults">
  <h2>Results</h2>
  <!-- Add a TrackList component -->
</div>*/
import React from 'react';
import { TrackList } from '../TrackList/TrackList';
import './SearchResults.css';

export class SearchResults extends React.Component {
  render() {
    return (
      <div className="SearchResults">
        <h2>Results</h2>
        <TrackList onAdd={this.props.onAdd} isRemoval={false} results={this.props.searchTracks}/>
      </div>
    );
  }
}

SearchResults.defaultProps = {
  searchTracks : [],
  onAdd : () => {alert('Default prop onAdd() in SearchResults.js. Pass a callback')}
}