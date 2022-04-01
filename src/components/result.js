// Imports
import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

class Result extends Component {
  render() {
    // Creating a conditional structure for result
    let result = "";
    // Define turn and add the message
    if (this.props.turn) {
      result = `Turn: It is ${this.props.turn.toUpperCase()}'s turn.`;
    }
    // Define if someone wins the gam
    if (this.props.winning) {
      result = `Game result: ${this.props.winning.toUpperCase()} wins the game.`;
    } else if (this.props.draw) { // Define if the game is ended with a draw
      result = (
        <p>
          Game result: It is a draw! To replay the game, click on Restart the
          game button.
        </p>
      );
    }
    return <div>result</div>;
  }
}
