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