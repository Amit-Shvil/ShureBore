'use strict';

class Board {
  public model: Array<Array<Dot>>;

  constructor(private boardSize) {
    this.initBoard(boardSize);
  }

  private initBoard(boardSize: number) {
    this.model = new Array(boardSize);
    for (let row = 0; row < boardSize; row++) {
      this.model[row] = new Array(row + 1);
      for (let col = 0; col <= row; col++) {
        this.model[row][col] = new Dot(row, col);
      }
    }
  }

  isFull(): boolean {
    let isFull = true;
    for (let row = 0; row < this.model.length; row++) {
      for (let col = 0; col < this.model[row].length; col++) {
        isFull = isFull && !this.model[row][col].isEmpty();
      }
    }
    return isFull;
  }

  isLegalLine(line: Line) {
    if (line.length < 2) {
      return false;
    }
    if (line.isVertical()) {
      return this.boardSize - line.startDot.getCol() === line.length + 1;
    }
    if (line.isHorizontal()) {
      return this.model[line.startDot.getRow()].length === line.length;
    }
  }
}
