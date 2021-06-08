import React, { Component } from "react";
import Card from "../Card/Card";

class Hand extends Component {
  render() {
    return (
      <div className="Hand">
        <h1>{this.props.title}</h1>
        {this.props.hand.map((c) => (
          <Card key={c.id} name={c.name} score={c.score} imgSrc={c.imgSrc} />
        ))}
      </div>
    );
  }
}

export default Hand;
