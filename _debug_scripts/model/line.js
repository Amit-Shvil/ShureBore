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