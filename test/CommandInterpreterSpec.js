import * as CommandInterpreter from 'app/CommandInterpreter';

describe('CommandInterpreter', function() {
  describe('::interpretMove', function() {
    describe('When moving left', function() {
      it('returns move action with left direction', function() {
        expect(CommandInterpreter.interpretMove('move left')).toBe({
          type: 'MOVE',
          direction: 'LEFT'
        });
      });
    });

    describe('When moving right', function() {
      it('returns move action with right direction', function() {
        expect(CommandInterpreter.interpretMove('move right')).toBe({
          type: 'MOVE',
          direction: 'RIGHT'
        });
      });
    });

    describe('When moving up', function() {
      it('returns move action with up direction', function() {
        expect(CommandInterpreter.interpretMove('move up')).toBe({
          type: 'MOVE',
          direction: 'UP'
        });
      });
    });

    describe('When moving down', function() {
      it('returns move action with down direction', function() {
        expect(CommandInterpreter.interpretMove('move down')).toBe({
          type: 'MOVE',
          direction: 'DOWN'
        });
      });
    });
  });
});