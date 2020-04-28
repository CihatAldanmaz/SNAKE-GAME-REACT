import React, { Component } from "react";
import Dashboard from "./Dashboard";
import snakegameenter from "./images/snakegameenter.png"

export default class App extends Component {
  state = {
    play: false,
  };

  playGame = () => {
    this.setState({
      play: true,
    });
  };

  render() {
    return (
      <div>
        {this.state.play ? (
          <Dashboard />
        ) : (
          <div className="entergame">
            <img src={snakegameenter}></img>
            <button className="playbutton" onClick={this.playGame}>
              PLAY
            </button>
          </div>
        )}
      </div>
    );
  }
}
