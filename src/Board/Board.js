import React, { Component } from "react";
import Hand from "../Hand/Hand";
import people from "../Helpers/Helper";

class Board extends Component {
  constructor(props) {
    super(props);
    this.state = {
      peopleList: people,
    };
  }
  render() {
    return (
      <div>
        <h1>Chorão Board!</h1>
        <Hand title="TSE's" hand={this.state.peopleList.TSEs} />
        <Hand title="CSE's" hand={this.state.peopleList.CSEs} />
        <Hand title="LEADERSHIP" hand={this.state.peopleList.LEADERSHIP} />
      </div>
    );
  }
}

export default Board;
