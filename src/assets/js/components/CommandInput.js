
export default class {
  constructor(el, props) {
    this.__el = el;
    this.props = props;

    this.bindEvents();
  }

  bindEvents() {
    $(this.__el).bind('submit', this.onFormSubmit.bind(this));
  }

  onFormSubmit(e) {
    e.preventDefault();

    var data = $(this.__el).serializeArray();

    
  }

  render() {
  }
}