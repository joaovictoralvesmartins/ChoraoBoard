import React, { Component } from "react";
import Card from "../Card/Card";
import "./Hand.css";

class Hand extends Component {
  render() {
    return (
      <div>
        <h1>{this.props.title}</h1>
        <div className="Hand">
          {this.props.hand.map((c) => (
            <Card key={c.id} name={c.name} score={c.score} imgSrc={c.imgSrc} />
          ))}
        </div>
      </div>
    );
  }
}

export default Hand;
