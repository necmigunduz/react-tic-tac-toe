// Import lodash and the result method from logic file
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
      const { symbol, horizontal, vertical } = action;
      // Create a copy the original state
      const newState = _.cloneDeep(state);
      newState.board[horizontal][vertical] = symbol;
      // Results for symbols of X and O
      const resultX = result(X, newState.board);
      const resultO = result(O, newState.board);

      // Conditions to realize the winning symbol and the winning line or cross
      // If X is the winner
      if (resultX.winning) {
        newState.winning = X;
        newState.winningLine = resultX.line;
      }
      // If O is the winner
      if (resultO.winning) {
        newState.winning = O;
        newState.winningLine = resultO.line;
      }
      // If no one wins, decision who will make the next turn
      if (!newState.winning) {
        newState.turn = newState.turn === O ? X : O;
      }
      // Copy the mutated state of the newState
      // and check whether the number of the filled cells equals to nine
      // (Checking if all the moves are completed by two players)
      const boardFilled =
        [
          ...newState.board[0],
          ...newState.board[1],
          ...newState.board[2],
        ].filter((cell) => cell !== "").length === 9;
      // Check if there is a draw if all the cells are filled and no winners
      if (boardFilled && !newState.won) {
        newState.draw = true;
      }

      //Return the mutated newState - The original state is not mutated.
      return newState;
    // RESET_GAME means returning to the initial state values given on the top of the reducer
    case "RESET_GAME":
      return initialState;
    default:
      return state;
  }
};
// Export the initial state, the symbols of X and O, and the reducer
export { initialState, reducer, X, O };
