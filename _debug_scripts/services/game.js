/// <reference path="../../../reference.ts" />
'use strict';
var Game = (function () {
    /* @ngInject */
    //inject() {
    //}
    function Game() {
        this.players = new Array(2);
        this.players[0] = new Player('Player 1', '#ff0000');
        this.players[1] = new Player('Player 2', '#0000ff');
        this.activePlayer = 0;
        this.isOver = false;
        this.board = new Board(5);
        this.turn = { dot: undefined, lines: undefined };
    }
    Game.prototype.isGameOver = function () {
        return this.board.isFull();
    };
    Game.prototype.getBoard = function () {
        return this.board;
    };
    Game.prototype.getWinners = function () {
        var max = -1;
        this.players.forEach(function (player) {
            if (player.getScore() > max) {
                max = player.getScore();
            }
        });
        return this.players.filter(function (player) {
            return player.getScore() === max;
        }).map(function (player) {
            return player.name;
        });
    };
    Game.prototype.playTurn = function (dot) {
        if (this.canPlaceDot(dot)) {
            this.turn.dot = dot;
            dot.fill();
        }
    };
    Game.prototype.canPlaceDot = function (dot) {
        return dot.isEmpty() && !this.turn.dot;
    };
    Game.prototype.canPlayerEndTurn = function () {
        return !!this.turn.dot;
    };
    Game.prototype.endTurn = function () {
        this.turn = { dot: undefined, lines: undefined };
        this.activePlayer = (this.activePlayer + 1) % this.players.length;
    };
    Game.prototype.getActivePlayer = function () {
        return this.players[this.activePlayer];
    };
    Game.prototype.canDrawLine = function (line) {
        var canDraw = true;
        if (this.board.isLegalLine(line)) {
            for (var p = 0; p < this.players.length; p++) {
                if (this.players[p].hasLine(line)) {
                    canDraw = false;
                }
            }
        }
        else {
            canDraw = false;
        }
        return canDraw;
    };
    Game.prototype.drawLine = function (line) {
        if (this.canDrawLine(line)) {
            this.players[this.activePlayer].lines.push(line);
        }
    };
    return Game;
}());
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
//# sourceMappingURL=game.js.map