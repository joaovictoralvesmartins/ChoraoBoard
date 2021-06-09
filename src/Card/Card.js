import React, { Component } from "react";
import "./Card.css";
class Card extends Component {
  render() {
    return (
      <div className="Card">
        <h5>{this.props.name}</h5>
        <div className="Card-Img">
          <img src={this.props.imgSrc} alt={this.props.name} />
        </div>
        <h5>Chorão Points: {this.props.score}</h5>
      </div>
    );
  }
}

export default Card;
