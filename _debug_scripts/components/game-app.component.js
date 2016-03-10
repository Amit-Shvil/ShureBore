/// <reference path="../../../reference.ts" />
'use strict';
var GameApp = (function () {
    /* @ngInject */
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