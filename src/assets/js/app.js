import Dispatcher from './Dispatcher';

import LevelLayoutBuilder from './level/LevelLayoutBuilder';

import AppStore from './stores/AppStore';

import DebugActionCreator from './actions/DebugActionCreator';

import Display from './components/Display';
import Debug from './components/Debug';

var dispatcher = new Dispatcher();

var levelLayoutBuilder = new LevelLayoutBuilder();

var appStore = new AppStore(levelLayoutBuilder);
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

var debug = new Debug(
  document.getElementById('debug'),
  {
    appStore: appStore,
    debugActionCreator: debugActionCreator
  }
);

display.render();
debug.render();