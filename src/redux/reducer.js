import * as _ from 'lodash';
import { result } from '../logic/logic';

// Add symbols
const X = 'x';
const O = 'o';

// Add inital state
const initialState = {
  board: {
    0: ['', '', ''],
    1: ['', '', ''],
    2: ['', '', ''],
  },
  winning: undefined,
  winningLine: undefined,
  draw: false,
  turn: O
};

