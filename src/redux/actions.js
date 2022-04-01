const placeSymbol = (horizontal, vertical, symbol) => ({
    type: 'PLACE_SYMBOL',
    symbol,
    horizontal,
    vertical
});

const resetGame = () => ({
    type: 'RESET_GAME'
});

export { placeSymbol, resetGame };