
import React from "react";
import './Track.css';

export class Track extends React.Component {
  constructor(props) {
    super(props);
    this.addTrack = this.addTrack.bind(this);
    this.removeTrack = this.removeTrack.bind(this);
  }

  renderAction() {
    return this.props.isRemoval ? '-' : '+';
  }

  addTrack() {
    this.props.onAdd(this);
  }

  removeTrack() {
    this.props.onRemove(this);
    console.log("error!");
  }

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