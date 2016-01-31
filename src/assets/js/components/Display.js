

export default class {
  constructor(el) {
  	this.__el=el
  }

  render() {
	this.__el.innerHTML = 'Hello';
  }
};