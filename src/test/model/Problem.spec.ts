import { Place } from "../../data/Place";
import { runToTheHills } from "../../data/TestProblems";
import { Problem } from "../../model/Problem";
import { RegionOfInterest } from "../../model/RegionOfInterest";

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

        test("should have parsed correct regions of interest", () => {
            const numberOfROIs = 3;

            expect(subject.regionsOfInterest.length).toEqual(numberOfROIs);
            expect(subject.regionsOfInterest.some(roi => roi.place === Place.HOUSE))
            expect(subject.regionsOfInterest.some(roi => roi.place === Place.CASTLE))
            expect(subject.regionsOfInterest.some(roi => roi.place === Place.PRINCESS))
        });
    });

});