// Counting a symbol in a row and deciding whether game is won or there exists a threat
const countRow = (symbol, horizontal) =>
  horizontal.filter((e) => e === symbol).length;
const wonRow = (symbol, horizontal) => countRow(symbol, horizontal) === 3;
const threatRow = (symbol, horizontal) => countRow(symbol, horizontal) === 2;
