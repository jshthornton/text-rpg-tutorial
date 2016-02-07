import Constants from '../constants/Constants';
import $ from 'jquery';

export default class {
  constructor() {
    this.__level = 0;
    this.__playerX = 0;
    this.__playerY = 0;
  }

  getLevel() {
    return this.__level;
  }

  onDispatch(payload) {

    switch(payload.type) {
      case Constants.ActionTypes.DEBUG_NEXT_LEVEL_CLICK:
        this.__level++;
        this.emitChange();
        break;
    }
  }

  emitChange() {
    $(document).trigger('appStoreChange');
  }
};