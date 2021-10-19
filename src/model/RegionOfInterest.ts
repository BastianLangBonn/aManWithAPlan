import { Place } from "../data/Place";
import { Position } from "../data/Position";

export class RegionOfInterest {
    private _place: Place;
    private _position: Position;

    public get place() {
        return this._place;
    }
    
    public get position() {
        return this._position;
    }

    constructor(place: Place, position: Position) {
        this._place = place;
        this._position = position;
    }
}