import { Place } from "../../data/Place";
import { Position } from "../../data/Position";
import { runToTheHills } from "../../data/TestProblems";
import { Problem } from "../../model/Problem";

describe("Constructor", () => {

    describe("Illegal", () => {
        test("should throw error when empty string", () => {
            expect(() => new Problem([])).toThrow(/Illegal Argument/gi);
        });
    });

    describe("Correct", () => {
        let subject: Problem;
        beforeEach(() => {
            subject = new Problem(runToTheHills);
        });

        test("should have parsed correct width", () => {
            const width = 5;
            expect(subject.width).toEqual(width);
        });

        test("should have parsed correct height", () => {
            const heigth = 5;
            expect(subject.height).toEqual(heigth);
        })

        test("should have parsed correct objective", () => {
            const objective = Place.PRINCESS;
            expect(subject.objective).toEqual(objective);
        });

        test("should have parsed all regions of interest", () => {
            const numberOfROIs = 3;

            expect(subject.regionsOfInterest.length).toEqual(numberOfROIs);
            expect(subject.regionsOfInterest.some(roi => roi.place === Place.HOUSE))
            expect(subject.regionsOfInterest.some(roi => roi.place === Place.CASTLE))
            expect(subject.regionsOfInterest.some(roi => roi.place === Place.PRINCESS))
        });

        test("should have parsed correct positions for regions of interests", () => {
            const housePosition: Position = new Position(0, 4);
            const princessPosition: Position = new Position(2, 2);
            const castlePosition: Position = new Position(4, 0);
            
            expect(subject.regionsOfInterest.find(roi => roi.place === Place.HOUSE)?.position).toEqual(housePosition);
            expect(subject.regionsOfInterest.find(roi => roi.place === Place.PRINCESS)?.position).toEqual(princessPosition);
            expect(subject.regionsOfInterest.find(roi => roi.place === Place.CASTLE)?.position).toEqual(castlePosition);
        });
    });

});