import Dispatcher from './Dispatcher';

import LevelLayoutBuilder from './level/LevelLayoutBuilder';

import AppStore from './stores/AppStore';

import CommandInputActionCreator from './actions/CommandInputActionCreator';
import DebugActionCreator from './actions/DebugActionCreator';

import Display from './components/Display';
import CommandInput from './components/CommandInput';
import Debug from './components/Debug';

var dispatcher = new Dispatcher();

var levelLayoutBuilder = new LevelLayoutBuilder();

var appStore = new AppStore(levelLayoutBuilder);
var commandInputActionCreator = new CommandInputActionCreator(dispatcher);
var debugActionCreator = new DebugActionCreator(dispatcher);

dispatcher.register(appStore);

var display = new Display(
  document.getElementById('display'),
  {
    // DI
    // Store
    appStore: appStore,

    // Action Creators
    //debugActionCreator: debugActionCreator

  }
);

var commandInput = new CommandInput(
  document.getElementById('command-input'),
  {
    commandInputActionCreator: commandInputActionCreator
  }
);

var debug = new Debug(
  document.getElementById('debug'),
  {
    appStore: appStore,
    debugActionCreator: debugActionCreator
  }
);

display.render();
commandInput.render();
debug.render();