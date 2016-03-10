/// <reference path="../../../reference.ts" />
'use strict';

class GameApp {
  canvas: any;
  context: any;
  game: Game;
  private tmpDots: Array<Dot>;

  /* @ngInject */
  constructor(private $scope: ng.IScope, private Game) {
    this.canvas = document.getElementById('canvas');
    this.context = this.canvas.getContext('2d');

    this.tmpDots = new Array(2);
    this.game = new Game();
    this.canvas.addEventListener('click', (event) => this.onCanvasClick(event));
    this.canvas.addEventListener('mousedown', (event) => this.onCanvasDown(event));
    this.canvas.addEventListener('mouseup', (event) => this.onCanvasUp(event));
    this.render();
  }

  private onCanvasUp(event: Event): any {
    let dot = this.getSelectedDot(event);
    if (dot && dot !== this.tmpDots[0]) {
      this.tmpDots.push(dot);
      if (this.tmpDots.length === 2) {
        let line = new Line(this.tmpDots[0], this.tmpDots[1]);
        this.game.drawLine(line);
        this.render();
        //if (this.game.canDrawLine(line)) {
        //  this.game.addLine(line);
        //  //this.drawLine(line);
        //}
      }
    }
  }

  render() {
    this.drawBoard();
  }

  private onCanvasDown(event: Event): any {
    let dot = this.getSelectedDot(event);
    this.tmpDots = [];
    if (dot) {
      this.tmpDots.push(dot)
    }
  }

  private getSelectedDot(event): Dot {
    const x = event.pageX - this.canvas.offsetLeft,
      y = event.pageY - this.canvas.offsetTop;
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
      let dot = this.getSelectedDot(event);
      if (dot) {
        this.game.playTurn(dot);
        this.render();
      }
    });
  }

  private drawBoard() {
    for (let row = 0; row < this.game.getBoard().model.length; row++) {
      for (let cols = 0; cols < this.game.getBoard().model[row].length; cols++) {
        this.drawDot(this.game.getBoard().model[row][cols]);
      }
    }
    this.drawLines();
  }

  private drawLines() {
    this.game.players.forEach(player => {
      player.lines.forEach(line => {
        this.drawLine(line, player.color);
      });
    })
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
    if (this.game.isGameOver()) {
      let endMsg = `${this.game.getWinners()} won!`;
      alert(`'Game Over! ${endMsg}`);
    }
  }

  private drawLine(line: Line, color: string): void {
    this.context.beginPath();
    this.context.moveTo(line.startDot.getXPosition(), line.startDot.getYPosition());
    this.context.lineTo(line.endDot.getXPosition(), line.endDot.getYPosition());
    this.context.strokeStyle = color;
    this.context.stroke();
  }
}

angular
  .module('documentsAppInternal')
  .component('gameApp', {
    template: `
<canvas id="canvas" width="800" height="400" />
<div>{{$ctrl.game.getActivePlayer().name}}'s turn</div>
<button ng-disabled="!$ctrl.canEndTurn()" ng-click="$ctrl.endTurn()">End Turn</button>
<score-table players="$ctrl.game.players"></score-table>
`,
    controller: GameApp,
    bindings: {
      name: '='
    }
  });
