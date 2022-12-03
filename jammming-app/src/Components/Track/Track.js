/*<div class="Track">
  <div class="Track-information">
    <h3><!-- track name will go here --></h3>
    <p><!-- track artist will go here--> | <!-- track album will go here --></p>
  </div>
  <button class="Track-action"><!-- + or - will go here --></button>
</div>*/

import React from "react";

export class Track extends React.Component {
  // TODO: track name, track artist, track album, +/-
  render() {
    <div className="Track">
      <div className="Track-information">
        <h3>{"Track one"}</h3>
        <p> track artist will go here | track album will go here </p>
      </div>
      <button className="Track-action">+ or - will go here</button>
    </div>
  }
}