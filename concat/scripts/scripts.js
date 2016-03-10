/// <reference path="../../reference.ts" />
'use strict';
//add services, directives, controllers, filters, etc. in this module
//avoid adding module dependencies for this module
angular
    .module('documentsAppInternal', ['documentsTranslations', 'wixAngular', 'wix.common.bi', 'ngMaterial', 'wixStyle']);
//add module dependencies & config and run blocks in this module
//load only the internal module in tests and mock any module dependency
//the only exception to load this module in tests in to test the config & run blocks
angular
    .module('documentsApp', ['documentsAppInternal'])
    .config(function () {
    return;
});
//# sourceMappingURL=app.js.map
'use strict';
var Dot = (function () {
    function Dot(row, col) {
        this.row = row;
        this.col = col;
        this.radius = 10;
        this.dotSpace = 50;
        this.boardOffset = 15;
        this.status = false;
    }
    Dot.prototype.getRow = function () {
        return this.row;
    };
    Dot.prototype.getDotSize = function () {
        return this.radius;
    };
    Dot.prototype.getCol = function () {
        return this.col;
    };
    Dot.prototype.isEmpty = function () {
        return !this.status;
    };
    Dot.prototype.fill = function () {
        this.status = true;
    };
    Dot.prototype.getXPosition = function () {
        return this.getCol() * this.dotSpace + this.boardOffset;
    };
    Dot.prototype.getYPosition = function () {
        return this.getRow() * this.dotSpace + this.boardOffset;
    };
    Dot.prototype.isInDot = function (XPosition, YPosition) {
        return Math.pow(this.getXPosition() - XPosition, 2) +
            Math.pow(this.getYPosition() - YPosition, 2) <= Math.pow(this.radius, 2);
    };
    return Dot;
}());
//# sourceMappingURL=dot.js.map
/// <reference path="../../../reference.ts" />
'use strict';
var GameApp = (function () {
    /* @ngInject */
    GameApp.$inject = ["$scope", "Game"];
    function GameApp($scope, Game) {
        var _this = this;
        this.$scope = $scope;
        this.Game = Game;
        this.canvas = document.getElementById('canvas');
        this.context = this.canvas.getContext('2d');
        this.tmpDots = new Array(2);
        this.game = new Game();
        this.canvas.addEventListener('click', function (event) { return _this.onCanvasClick(event); });
        this.canvas.addEventListener('mousedown', function (event) { return _this.onCanvasDown(event); });
        this.canvas.addEventListener('mouseup', function (event) { return _this.onCanvasUp(event); });
        this.render();
    }
    GameApp.prototype.onCanvasUp = function (event) {
        var dot = this.getSelectedDot(event);
        if (dot && dot !== this.tmpDots[0]) {
            this.tmpDots.push(dot);
            if (this.tmpDots.length === 2) {
                var line = new Line(this.tmpDots[0], this.tmpDots[1]);
                this.game.drawLine(line);
                this.render();
            }
        }
    };
    GameApp.prototype.render = function () {
        this.drawBoard();
    };
    GameApp.prototype.onCanvasDown = function (event) {
        var dot = this.getSelectedDot(event);
        this.tmpDots = [];
        if (dot) {
            this.tmpDots.push(dot);
        }
    };
    GameApp.prototype.getSelectedDot = function (event) {
        var x = event.pageX - this.canvas.offsetLeft, y = event.pageY - this.canvas.offsetTop;
        for (var row = 0; row < this.game.getBoard().model.length; row++) {
            for (var cols = 0; cols < this.game.getBoard().model[row].length; cols++) {
                var dot = this.game.getBoard().model[row][cols];
                if (dot.isInDot(x, y)) {
                    console.log('clicked in:' + row + ',' + cols);
                    return dot;
                }
            }
        }
        return null;
    };
    GameApp.prototype.onCanvasClick = function (event) {
        var _this = this;
        this.$scope.$apply(function () {
            var dot = _this.getSelectedDot(event);
            if (dot) {
                _this.game.playTurn(dot);
                _this.render();
            }
        });
    };
    GameApp.prototype.drawBoard = function () {
        for (var row = 0; row < this.game.getBoard().model.length; row++) {
            for (var cols = 0; cols < this.game.getBoard().model[row].length; cols++) {
                this.drawDot(this.game.getBoard().model[row][cols]);
            }
        }
        this.drawLines();
    };
    GameApp.prototype.drawLines = function () {
        var _this = this;
        this.game.players.forEach(function (player) {
            player.lines.forEach(function (line) {
                _this.drawLine(line, player.color);
            });
        });
    };
    GameApp.prototype.drawDot = function (dot) {
        this.context.beginPath();
        this.context.arc(dot.getXPosition(), dot.getYPosition(), dot.getDotSize(), 0, 2 * Math.PI, false);
        this.context.fillStyle = dot.isEmpty() ? '#ccddff' : '#000000';
        this.context.fill();
        this.context.lineWidth = 1;
        this.context.strokeStyle = '#666666';
        this.context.stroke();
    };
    GameApp.prototype.canEndTurn = function () {
        return this.game.canPlayerEndTurn();
    };
    GameApp.prototype.endTurn = function () {
        this.game.endTurn();
        if (this.game.isGameOver()) {
            var endMsg = this.game.getWinners() + " won!";
            alert("'Game Over! " + endMsg);
        }
    };
    GameApp.prototype.drawLine = function (line, color) {
        this.context.beginPath();
        this.context.moveTo(line.startDot.getXPosition(), line.startDot.getYPosition());
        this.context.lineTo(line.endDot.getXPosition(), line.endDot.getYPosition());
        this.context.strokeStyle = color;
        this.context.stroke();
    };
    return GameApp;
}());
angular
    .module('documentsAppInternal')
    .component('gameApp', {
    template: "\n<header class=\"header\">\n  <div class=\"player-turn\">{{$ctrl.game.getActivePlayer().name}}'s turn</div>\n  <button type=\"button\" class=\"wix-button end-turn-btn\" ng-disabled=\"!$ctrl.canEndTurn()\" ng-click=\"$ctrl.endTurn()\">End Turn</button>\n</header>\n<canvas id=\"canvas\" width=\"300\" height=\"300\" />\n<score-table players=\"$ctrl.game.players\"></score-table>\n",
    controller: GameApp,
    bindings: {
        name: '='
    }
});
//# sourceMappingURL=game-app.component.js.map
'use strict';
var Board = (function () {
    function Board(boardSize) {
        this.boardSize = boardSize;
        this.initBoard(boardSize);
    }
    Board.prototype.initBoard = function (boardSize) {
        this.model = new Array(boardSize);
        for (var row = 0; row < boardSize; row++) {
            this.model[row] = new Array(row + 1);
            for (var col = 0; col <= row; col++) {
                this.model[row][col] = new Dot(row, col);
            }
        }
    };
    Board.prototype.isFull = function () {
        var isFull = true;
        for (var row = 0; row < this.model.length; row++) {
            for (var col = 0; col < this.model[row].length; col++) {
                isFull = isFull && !this.model[row][col].isEmpty();
            }
        }
        return isFull;
    };
    Board.prototype.isLegalLine = function (line) {
        if (line.length < 2) {
            return false;
        }
        if (line.isVertical()) {
            return this.boardSize - line.startDot.getCol() === line.length;
        }
        if (line.isHorizontal()) {
            return this.model[line.startDot.getRow()].length === line.length;
        }
    };
    return Board;
}());
//# sourceMappingURL=board.js.map
'use strict';
var Player = (function () {
    function Player(name, color) {
        this.name = name;
        this.score = 0;
        this.lines = [];
        this.color = color;
    }
    Player.prototype.getScore = function () {
        var score = 0;
        this.lines.forEach(function (line) {
            score += line.length;
        });
        return score;
    };
    Player.prototype.hasLine = function (line) {
        var hasLineFlag = false;
        this.lines.forEach(function (_line) {
            hasLineFlag = _line.isEqual(line) || hasLineFlag;
        });
        return hasLineFlag;
    };
    return Player;
}());
//# sourceMappingURL=player.js.map
/**
 * Created by amits on 10/03/2016.
 */
'use strict';
var Line = (function () {
    function Line(start, end) {
        this.startDot = start;
        this.endDot = end;
        this.length = this.calcLength();
    }
    Line.prototype.calcLength = function () {
        if (this.startDot.getCol() === this.endDot.getCol()) {
            return Math.abs(this.startDot.getRow() - this.endDot.getRow()) + 1;
        }
        else if (this.startDot.getRow() === this.endDot.getRow()) {
            return Math.abs(this.startDot.getCol() - this.endDot.getCol()) + 1;
        }
    };
    Line.prototype.isEqual = function (line) {
        return ((this.startDot === line.startDot && this.endDot === line.endDot) ||
            (this.startDot === line.endDot && this.endDot === line.startDot));
    };
    Line.prototype.isVertical = function () {
        return this.startDot.getCol() === this.endDot.getCol();
    };
    Line.prototype.isHorizontal = function () {
        return this.startDot.getRow() === this.endDot.getRow();
    };
    return Line;
}());
//# sourceMappingURL=line.js.map
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
    .factory('Game', ["$injector", function ($injector) {
    return function () {
        var instance = Object.create(Game.prototype);
        $injector.invoke(instance.inject || angular.noop, instance);
        Game.apply(instance, arguments);
        return instance;
    };
}]);
//# sourceMappingURL=game.js.map
/// <reference path="../../../reference.ts" />
'use strict';
var ScoreTable = (function () {
    function ScoreTable() {
    }
    return ScoreTable;
}());
angular
    .module('documentsAppInternal')
    .component('scoreTable', {
    template: "\n<section class=\"score-table\">\n  <div class=\"score-table-title\">Score Table:</div>\n  <div class=\"player-entry\" ng-repeat=\"player in $ctrl.players\">\n    <div class=\"player-name\">{{player.name}}</div>\n    <div class=\"player-score\">{{player.getScore()}}</div>\n  </div>\n</section>\n    ",
    controller: ScoreTable,
    bindings: {
        players: '='
    }
});
//# sourceMappingURL=score-table.js.map

