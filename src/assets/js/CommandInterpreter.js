import _ from 'lodash';

export function interpret(input) {
  var input = input.toLowerCase();

  //if(_.startsWith(input, 'move')) {
    return interpretMove(input);
  //}
};

// 'move left' => { type: 'MOVE', direction: 'LEFT' }
// 'move right' => { type: 'MOVE', direction: 'RIGHT' }
// 'move up' => { type: 'MOVE', direction: 'UP' }
// 'move down' => { type: 'MOVE', direction: 'DOWN' }
export function interpretMove(input) {

};