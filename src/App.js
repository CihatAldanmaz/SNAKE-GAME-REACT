import React, { Component } from "react";
import Dashboard from "./Dashboard";

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
            <img src="https://raw.githubusercontent.com/CihatAldanmaz/SNAKE-GAME-REACT/master/src/snakegameenter.png"></img>
            <button className="playbutton" onClick={this.playGame}>
              PLAY
            </button>
          </div>
        )}
      </div>
    );
  }
}
