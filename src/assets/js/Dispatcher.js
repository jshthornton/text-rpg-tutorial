
export default class {

  constructor() {
    this.__stores = [];
  }

  register(store) {
    this.__stores.push(store);
  }

  dispatch(payload) {
    this.__stores.forEach((store) => {
      store.onDispatch(payload);
    });
  }
};