// Imports
import React from 'react';
import styled from 'styled-components';
import Board from './components/board';
import './App.css';

const App = () => {
  return (
    <div>
      <h1>Two-Player Tic-Tac-Toe Game</h1>
      <Board className='Board' />
    </div>
  );
}
// Style App
export default styled(App)`
  margin: 0 auto;
  width: 500px;
  display: flex;
  flex-direction: column;
`;
