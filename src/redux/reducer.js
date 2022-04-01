import * as _ from "lodash";
import { result } from "../logic/logic";

// Add symbols
const X = "x";
const O = "o";

// Add inital state
const initialState = {
  board: {
    0: ["", "", ""],
    1: ["", "", ""],
    2: ["", "", ""],
  },
  winning: undefined,
  winningLine: undefined,
  draw: false,
  turn: O,
};

const reducer = (state, action) => {
  switch (action.type) {
    case "PLACE_SYMBOL":
      // Destruction of action
      const { symbol, horizontal, vertical } = action;
      // Create a copy the original state
      const newState = _.cloneDeep(state);
      newState.board[horizontal][vertical] = symbol;
      // Results for symbols of X and O
      const resultX = result(X, newState.board);
      const resultO = result(O, newState.board);

      return newState;
    case "RESET_GAME":
      return initialState;
    default:
      return state;
  }
};
