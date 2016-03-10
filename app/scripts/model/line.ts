/**
 * Created by amits on 10/03/2016.
 */
'use strict';
class Line {
  public startDot: Dot;
  public endDot: Dot;
  public length: number;

  constructor(start: Dot, end: Dot) {
    this.startDot = start;
    this.endDot = end;
    this.length = this.calcLength();
  }

  private calcLength(): number {
    if (this.startDot.getCol() === this.endDot.getCol()) {
      return Math.abs(this.startDot.getRow() - this.endDot.getRow()) + 1;
    } else if (this.startDot.getRow() === this.endDot.getRow()) {
      return Math.abs(this.startDot.getCol() - this.endDot.getCol()) + 1;
    }
  }

  public isEqual(line: Line): boolean {
    return ((this.startDot === line.startDot && this.endDot === line.endDot) ||
    (this.startDot === line.endDot && this.endDot === line.startDot  ));
  }

  isVertical(): boolean {
    return this.startDot.getCol() === this.endDot.getCol();
  }

  isHorizontal(): boolean {
    return this.startDot.getRow() === this.endDot.getRow();
  }
}
