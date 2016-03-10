'use strict';

class Board {
    BOARD_SIZE: number = 5;
    public model: Array<Array<Dot>>;

    constructor() {
        this.initBoard();
    }

    private initBoard() {
        this.model = new Array(this.BOARD_SIZE);
        for (let row = 0; row < this.BOARD_SIZE; row++) {
            this.model[row] = new Array(row + 1);
            for (let col = 0; col <= row; col++) {
                this.model[row][col] = new Dot(row, col);
            }
        }
    }
}
