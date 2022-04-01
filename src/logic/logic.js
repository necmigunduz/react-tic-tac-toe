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

  
