import { Places, RegionOfInterest } from "../data/RegionOfInterest";

export class Problem {
    private _width: number;
    private _height: number;
    private _objective: Places;
    private _regionsOfInterest: RegionOfInterest[];

    public get width() {
        return this._width;
    }

    public get height() {
        return this._height;
    }

    public get objective() {
        return this._objective;
    }

    public get regionsOfInterest() {
        return this._regionsOfInterest;
    }

    constructor(encodedProblem: string[]) {
        throw new Error("Not implemented yet");
    }
}