'use strict';
class Dot {

    private status: boolean;
    private radius: number = 10;
    private dotSpace: number = 50;
    private boardOffset = 15;

    constructor(private row: number,
                private col: number) {
        this.status = false;
    }

    public getRow(): number {
        return this.row;
    }

    public getDotSize(): number {
        return this.radius;
    }

    public getCol(): number {
        return this.col;
    }

    public isEmpty(): boolean {
        return !this.status;
    }

    public fill() {
        this.status = true;
    }

    public getXPosition() {
        return this.getCol() * this.dotSpace + this.boardOffset;
    }

    public getYPosition() {
        return this.getRow() * this.dotSpace + this.boardOffset;
    }

    public isInDot(XPosition, YPosition) {
        return Math.pow(this.getXPosition() - XPosition, 2) +
            Math.pow(this.getYPosition() - YPosition, 2) <= Math.pow(this.radius, 2);
    }

}
