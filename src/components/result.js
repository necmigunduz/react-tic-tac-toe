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
    // Define winning line
    let winL ='';
    if(this.props.winningLine==='horizontal0'){ // first row is winning
      winL = 'Winning row: First row'
    } else if(this.props.winningLine==='horizontal1'){ // second row is winning
      winL = 'Winning row: Second row'
    } else if(this.props.winningLine==='horizontal2'){ // third row is winning
      winL = 'Winning row: Third row'
    } else if(this.props.winningLine==='vertical0'){ // first column is winning
      winL = 'Winning column: First column'
    } else if(this.props.winningLine==='vertical1'){ // second column is winning
      winL = 'Winning column: Second column'
    } else if(this.props.winningLine==='vertical2'){ // third column is winning
      winL = 'Winning column: Third column'
    } else if(this.props.winningLine==='crossLeft'){ // left to right cross is winning
      winL = 'Winning cross cells: Left to Right'
    } else if(this.props.winningLine==='crossRight'){ // right to left cross is winning
      winL = 'Winning cross cells: Right to Left'
    }
    return <div>result</div>;
  }
}
