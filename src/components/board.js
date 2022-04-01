// Imports
import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import PrototypeSymbol from "./symbol";
import SymbolX from "./x";
import SymbolO from "./o";
import Result from "./result";
import { X, O } from "../redux/reducer";
import { placeSymbol, resetGame } from "../redux/actions";

// Board class component
class Board extends Component {
  // If there is no winner, place a symbol on the board
  placeSymbol(horizontal, vertical, symbol) {
    !this.props.winning && this.props.placeSymbol(horizontal, vertical, symbol);
  }
  // Decide which componet (X or O) to use depending on the turn
  getSymbol(horizontal, vertical, symbol) {
    // If turn belongs to symbol X
    if (symbol === X) {
      return <SymbolX key={vertical} vertical={vertical} />;
    }
    // If turn belongs to symbol Y
    if (symbol === O) {
      return <SymbolO key={vertical} vertical={vertical} />;
    }
    //  If no symbol is placed yet, show the empty board
    return (
      <PrototypeSymbol
        key={vertical}
        placeSymbol={this.placeSymbol.bind(this, horizontal, vertical)}
        turn={this.props.turn}
      />
    );
  }

  render() {
    return (
      <div>
        {Object.keys(this.props.board).map((horizontal) => {
          return (
            <div
              key={horizontal}
            >
              {this.props.board[horizontal].map((symbol, vertical) => {
                return this.getSymbol(horizontal, vertical, symbol);
              })}
            </div>
          );
        })}
        <Result winningLine={this.props.winningLine} />
        <button onClick={this.props.resetGame}>
          Restart the game!
        </button>
      </div>
    );
  };
};
