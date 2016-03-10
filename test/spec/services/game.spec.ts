/// <reference path="../../../reference.ts" />
'use strict';

describe('Factory: Game', () => {
  let game: Game;

  beforeEach(() => {
    module('documentsAppInternal');
  });

  beforeEach(inject(Game => {
    game = new Game(42);
  }));

  it('should do something', () => {
    //expect(game.getMeaningOfLife()).toBe('It is 42!');
  });

});
