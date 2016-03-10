'use strict';
class Dot{

    private row: number;
    private col: number;
    private status: boolean;
    private XPosition: number;
    private YPosition: number;
    private radius: number;

    constructor(row, col){
        this.row = row;
        this.col = col;
    }

    public getRow(): number{
        return this.row;
    }

    public getCol(): number{
        return this.col;
    }

    public getStatus(): boolean{
        return this.status;
    }

    public setPosition(XPosition, YPosition, radius){
        this.XPosition = XPosition;
        this.YPosition = YPosition;
        this.radius = radius;
    }

    public isInDot(XPosition, YPosition){
        return Math.pow(this.XPosition - XPosition, 2) +
                Math.pow(this.YPosition - YPosition, 2) <= this.radius
    }

}
