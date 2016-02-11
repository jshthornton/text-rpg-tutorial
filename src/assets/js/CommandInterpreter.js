import _ from 'lodash';

export function intepret(input) {
  var input = input.toLowerCase();

  if(_.startsWith(input, 'move')) {
    return intepretMove(input);
  }
};

function intepretMove(input) {
  
}