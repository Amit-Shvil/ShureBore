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