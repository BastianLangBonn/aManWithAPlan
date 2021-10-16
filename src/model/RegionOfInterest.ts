import { Place } from "../data/Place";

export class RegionOfInterest {
    private _place: Place;
    public get place() {
        return this._place;
    }
    constructor(place: Place) {
        this._place = place;
    }
}