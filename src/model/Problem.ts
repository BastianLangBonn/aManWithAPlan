import { Place as Place } from "../data/Place";
import { Position } from "../data/Position";
import { RegionOfInterest } from "./RegionOfInterest";

export class Problem {
    private _width: number;
    private _height: number;
    private _objective: Place;
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
        if (encodedProblem.length === 0) {
            throw new Error("Illegal Argument: Argument may not be an empty string.");
        }
        const mapInfo: string[] = encodedProblem[0].split(' ');
        const width: number = +mapInfo[0];
        const height: number = +mapInfo[1];
        const numberOfRois: number = +mapInfo[2];
        const objective: string = encodedProblem[1];
        const regionsOfInterest: RegionOfInterest[] = [];
        for (let i=0; i<numberOfRois; i++) {
            const line = encodedProblem[2+height+i].split(" ");
            const identifier: string = line[0];
            const place: Place = Place[identifier as keyof typeof Place]; 
            const position: Position = new Position(+line[1], +line[2]);
            regionsOfInterest.push(new RegionOfInterest(place, position))
        }
        this._width = width;
        this._height = height;
        this._objective = Place[objective as keyof typeof Place];
        this._regionsOfInterest = regionsOfInterest;

    }
}