import Constants from '../constants/Constants';

export default class {
  constructor(dispatcher) {
    this.__dispatcher = dispatcher;
  }

  nextLevel() {
    this.__dispatcher.dispatch({
      type: Constants.ActionTypes.DEBUG_NEXT_LEVEL_CLICK
    });
  }
};