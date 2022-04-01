// Counting a symbol in a row and deciding whether game is won or there exists a threat
const countRow = (symbol, horizontal) =>
  horizontal.filter((e) => e === symbol).length;
const wonRow = (symbol, horizontal) => countRow(symbol, horizontal) === 3;
const threatRow = (symbol, horizontal) => countRow(symbol, horizontal) === 2;

// Counting a symbol in a column and deciding whether game is won or there exists a threat
const countCol = (symbol, vertical, ...horizontals) =>
  horizontals
    .map((horizontal) => horizontal[vertical])
    .filter((e) => e === symbol).length;
const wonCol = (symbol, vertical, ...horizontals) =>
  countCol(symbol, vertical, ...horizontals) === 3;
const threatCol = (symbol, vertical, ...horizontals) =>
  countCol(symbol, vertical, ...horizontals) === 2;

// Counting a symbol from left to right cross and deciding whether game is won or there exists a threat
const countCrossLeft = (symbol, ...horizontals) => {
  const [horizontal0, horizontal1, horizontal2] = horizontals;
  return [horizontal0[0], horizontal1[1], horizontal2[2]].filter(
    (e) => e === symbol
  ).length;
};
const wonCrossLeft = (symbol, ...horizontals) =>
  countCrossLeft(symbol, ...horizontals) === 3;
const threatCrossLeft = (symbol, ...horizontals) =>
  countCrossLeft(symbol, ...horizontals) === 2;

// Counting a symbol from right to left cross and deciding whether game is won or there exists a threat
const countCrossRight = (symbol, ...horizontals) => {
  const [horizontal0, horizontal1, horizontal2] = horizontals;
  return [horizontal0[2], horizontal1[1], horizontal2[0]].filter(
    (e) => e === symbol
  ).length;
};
const wonCrossRight = (symbol, ...horizontals) =>
  countCrossRight(symbol, ...horizontals) === 3;
const threatCrossRight = (symbol, ...horizontals) =>
  countCrossRight(symbol, ...horizontals) === 2;

// Creating conditions for results when a player wins or no one wins
const result = (symbol, board) => {
  const horizontals = Object.keys(board).map((horizontal) => board[horizontal]);
  return [
    { line: 'horizontal0', winnin: wonRow(symbol, board[0]) },
    { line: 'horizontal1', winning: wonRow(symbol, board[1]) },
    { line: 'horizontal2', winning: wonRow(symbol, board[2]) },
    { line: 'vertical0', winning: wonCol(symbol, 0, ...horizontals) },
    { line: 'vertical1', winning: wonCol(symbol, 1, ...horizontals) },
    { line: 'vertical2', winning: wonCol(symbol, 2, ...horizontals) },
    { line: 'crossLeft', winning: wonCrossLeft(symbol, ...horizontals) },
    { line: 'crossRight', winning: wonCrossRight(symbol, ...horizontals) },
  ].reduce(
    (answer, nextCheck) => {
      return nextCheck.won ? nextCheck : answer;
    },
    { winning: false }
  );
};

// Export methods
export { threatRow, threatCol, threatCrossLeft, threatCrossRight, result};

