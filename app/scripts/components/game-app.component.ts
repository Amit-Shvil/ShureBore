/// <reference path="../../../reference.ts" />
'use strict';

class GameApp {
  canvas: any;
  context: any;
  game: Game;


  /* @ngInject */
  constructor(private $scope: ng.IScope, private Game) {
    this.canvas = document.getElementById('canvas');
    this.context = this.canvas.getContext('2d');
    this.game = new Game();
    this.drawBoard();
    this.canvas.addEventListener('click', (event) => this.onCanvasClick(event));
  }

  private getSelectedDot(x: number, y: number): Dot {
    for (let row = 0; row < this.game.getBoard().model.length; row++) {
      for (let cols = 0; cols < this.game.getBoard().model[row].length; cols++) {
        let dot = this.game.getBoard().model[row][cols];
        if (dot.isInDot(x, y)) {
          console.log('clicked in:' + row + ',' + cols);
          return dot;
        }
      }
    }
    return null;
  }

  private onCanvasClick(event): void {
    this.$scope.$apply(() => {
      const x = event.pageX - this.canvas.offsetLeft,
        y = event.pageY - this.canvas.offsetTop;
      let dot = this.getSelectedDot(x, y);
      if (dot) {
        this.game.playTurn(dot);
        this.drawDot(dot);
      }
      if (this.game.isGameOver()) {
        alert('Game Over!');
      }
    });
  }

  private drawBoard() {
    for (let row = 0; row < this.game.getBoard().model.length; row++) {
      for (let cols = 0; cols < this.game.getBoard().model[row].length; cols++) {
        this.drawDot(this.game.getBoard().model[row][cols]);
      }
    }
  }

  private drawDot(dot: Dot) {
    this.context.beginPath();
    this.context.arc(dot.getXPosition(), dot.getYPosition(), dot.getDotSize(), 0, 2 * Math.PI, false);
    this.context.fillStyle = dot.isEmpty() ? '#ccddff' : '#000000';
    this.context.fill();
    this.context.lineWidth = 1;
    this.context.strokeStyle = '#666666';
    this.context.stroke();
  }

  canEndTurn() {
    return this.game.canPlayerEndTurn();
  }

  endTurn() {
    this.game.endTurn();
  }

}

angular
  .module('documentsAppInternal')
  .component('gameApp', {
    template: `
<canvas id="canvas" width="800" height="400" />
<div>{{$ctrl.game.getActivePlayer().name}}'s turn</div>
<button ng-disabled="!$ctrl.canEndTurn()" ng-click="$ctrl.endTurn()">End Turn</button>
`,
    controller: GameApp,
    bindings: {
      name: '='
    }
  });
