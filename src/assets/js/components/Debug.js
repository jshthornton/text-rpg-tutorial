import $ from 'jquery';

export default class {

  constructor(el, props) {
    this.__el = el;
    this.props = props;

    this.bindEvents();
  }

  bindEvents() {
    $(this.__el).on('click', '.next-level', this.onNextLevelClick.bind(this));
  }

  onNextLevelClick() {
    this.props.debugActionCreator.nextLevel();
  }

  render() {
  }
};