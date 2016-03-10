/// <reference path="../../../reference.ts" />
'use strict';

class GameApp {
    board: Board;
    canvas: any;
    context: any;
    scale: number = 20;
    dot_space: number = 50;
    dot_size: number = 10;
    boardOffset = 15;
    /* @ngInject */
    constructor(private $scope: ng.IScope) {
        this.canvas = document.getElementById('canvas');
        this.context = this.canvas.getContext('2d');
        this.board = new Board();
        this.drawBoard();
        this.canvas.addEventListener('click', (event) => this.onCanvasClick(event));
    }

    private onCanvasClick(event): void {
        const x = event.pageX - this.canvas.offsetLeft,
            y = event.pageY - this.canvas.offsetTop;
        let dot: Dot;

        for (let row = 0; row < this.board.model.length; row++) {
            for (let cols = 0; cols < this.board.model[row].length; cols++) {
                dot = this.board.model[row][cols];
                if(dot.isInDot(x, y) && dot.isEmpty()){
                    dot.fill();
                    this.drawDot(dot);
                    console.log('clicked in:'+ row +','+cols);
                }
            }
        }
    }

    private drawBoard() {
        for (let row = 0; row < this.board.model.length; row++) {
            for (let cols = 0; cols < this.board.model[row].length; cols++) {
                this.drawDot(this.board.model[row][cols]);
            }
        }
    }

    private drawDot(dot: Dot) {
        this.context.beginPath();
        this.context.arc(this.boardOffset + dot.getCol() * this.dot_space, this.boardOffset + dot.getRow() * this.dot_space, this.dot_size, 0, 2 * Math.PI, false);
        this.context.fillStyle = dot.isEmpty() ? '#ccddff' : '#000000';
        this.context.fill();
        this.context.lineWidth = 1;
        this.context.strokeStyle = '#666666';
        this.context.stroke();
        dot.setPosition(this.boardOffset + dot.getCol() * this.dot_space, this.boardOffset + dot.getRow() * this.dot_space, this.dot_size);
    }

}

angular
    .module('documentsAppInternal')
    .component('gameApp', {
        template: '<canvas id="canvas" width="800" height="800" />',
        controller: GameApp,
        bindings: {
            name: '='
        }
    });
