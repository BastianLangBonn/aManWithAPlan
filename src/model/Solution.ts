export class Solution {
    private _numberOfTurns: number;
    public get numberOfTurns() {
        return this._numberOfTurns;
    }
    public set numberOfTurns(value: number) {
        this._numberOfTurns = value;
    }
    constructor() {
        this._numberOfTurns = 999;
    }
}