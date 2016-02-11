import LevelLayout from './LevelLayout';
import Room from './Room';

export default class {

  build() {
    return new LevelLayout([
      new Room(),
      new Room()
    ]);
  }
};