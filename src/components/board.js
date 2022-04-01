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
  };
  
  render() {
    return <div>board</div>;
  }
}
