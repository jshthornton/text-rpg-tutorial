import $ from 'jquery';

export default class {
  constructor(el, props) {
  	this.__el=el;
    this.props = props;

    $(document).bind('appStoreChange', () => {
      this.render();
    });
  }

  render() {
    var appStore = this.props.appStore;

    if(appStore.getLevel() === 0) {
      this.__el.innerHTML = 'Welcome to the Dungeon';
    } else {
      this.__el.innerHTML = 'Welcome to level ' + appStore.getLevel();
    }

  }
};