export class Position {
    private _x: number;
    private _y: number;

    public get x() {
        return this._x;
    }

    public get y() {
        return this._y;
    }

    constructor(x: number, y: number) {
        this._x = x;
        this._y = y;
    }

    public equals(position: Position): boolean {
        return this.x === position.x && this.y === position.y;
    }
}