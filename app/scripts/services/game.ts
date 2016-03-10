/// <reference path="../../../reference.ts" />
'use strict';

class Game {
  activePlayer: number;
  isOver: boolean;
  players: Player[];
  board: Board;
  turn: {dot: Dot, lines: any};

  /* @ngInject */
  inject() {
  }

  constructor() {
    this.players = new Array<Player>(2);
    this.players[0] = new Player('Player 1', '#ff0000');
    this.players[1] = new Player('Player 2', '#0000ff');
    this.activePlayer = 0;
    this.isOver = false;
    this.board = new Board(2);
    this.turn = {dot: undefined, lines: undefined};
  }

  isGameOver() {
    return this.board.isFull();
  }

  getBoard(): Board {
    return this.board;
  }

  getWinners() {
    let max = -1;
    this.players.forEach(player => {
      if(player.getScore() > max) {
        max = player.getScore();
      }
    });
    return this.players.filter(player => {
      return player.getScore() === max;
    }).map(player => {
      return player.name;
    });
  }

  playTurn(dot: Dot) {
    if (this.canPlaceDot(dot)) {
      this.turn.dot = dot;
      dot.fill();
    }
  }

  private canPlaceDot(dot: Dot): boolean {
    return dot.isEmpty() && !this.turn.dot;
  }

  canPlayerEndTurn() {
    return !!this.turn.dot;
  }

  endTurn() {
    this.turn = {dot: undefined, lines: undefined};
    this.activePlayer = (this.activePlayer + 1) % this.players.length;
  }

  getActivePlayer() {
    return this.players[this.activePlayer];
  }

  canDrawLine(line: Line): boolean {
    let canDraw: boolean = true;
    if (this.board.isLegalLine(line)) {
      for (var p = 0; p < this.players.length; p++) {
        if (this.players[p].hasLine(line)) {
          canDraw = false;
        }
      }
    } else {
      canDraw = false
    }
    return canDraw;
  }

  drawLine(line: Line) {
    if(this.canDrawLine(line)) {
      this.players[this.activePlayer].lines.push(line);
    }
  }
}

angular
  .module('documentsAppInternal')
  .factory('Game', function ($injector) {
    return function () {
      var instance = Object.create(Game.prototype);
      $injector.invoke(instance.inject || angular.noop, instance);
      Game.apply(instance, arguments);
      return instance;
    };
  });
