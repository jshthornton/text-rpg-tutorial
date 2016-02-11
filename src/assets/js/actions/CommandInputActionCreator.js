import Constants from '../constants/Constants';
import CommandInterpreter from '../CommandInterpreter';
import _ from 'lodash';

export default class {
  constructor(dispatcher) {
    this.__dispatcher = dispatcher;
  }

  sendCommand(data) {
    var command = _.find(data, ['name', 'command']);
    var dispatchType = CommandInterpreter.interpret(command.value);

/*    this.__dispatcher.dispatch({
        type: Constants.ActionType.COMMAND_INPUT_SEND_COMMAND
    });*/
  }
};