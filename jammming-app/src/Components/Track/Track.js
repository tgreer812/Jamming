/*<div class="Track">
  <div class="Track-information">
    <h3><!-- track name will go here --></h3>
    <p><!-- track artist will go here--> | <!-- track album will go here --></p>
  </div>
  <button class="Track-action"><!-- + or - will go here --></button>
</div>*/

import React from "react";
import './Track.css';

export class Track extends React.Component {
  constructor(props) {
    super(props);
    this.addTrack = this.addTrack.bind(this);
  }

  renderAction() {
    return this.props.isRemoval ? '-' : '+';
  }

  addTrack() {
    this.props.onAdd(this);
  }

  removeTrack() {
    this.props.onRemove(this.props.track);
  }

  // TODO: track name, track artist, track album, +/-
  render() {

    return (
      <div className="Track">
        <div className="Track-information">
          <h3>{this.props.name}</h3>
          <p> {this.props.artist} | {this.props.album} </p>
        </div>
        <button onClick={this.props.isRemoval ? this.removeTrack : this.addTrack} className="Track-action">{this.renderAction()}</button>
      </div>
    );
  }
}

// Track.defaultProps = {
//   isRemoval : false,
//   name : "track name",
//   artist : "track name",
//   album : "album name",
//   onAdd : () => {alert("Default props action!!");}
// }