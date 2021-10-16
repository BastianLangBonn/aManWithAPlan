import { Places } from "../../data/RegionOfInterest";
import { runToTheHills } from "../../data/TestProblems";
import { Problem } from "../../model/Problem";

describe("Constructor", () => {

    describe("Illegal", () => {
        test("should throw error when empty string", () => {
            expect(() => new Problem([])).toThrow();
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
            const objective = Places.PRINCESS;
            expect(subject.objective).toMatch(objective);
        });

        test("should have parsed correct regions of interest", () => {
            const numberOfROIs = 3;
            const rois = [Places.HOUSE, Places.CASTLE, Places.PRINCESS];

            expect(subject.regionsOfInterest.length).toEqual(numberOfROIs);
            rois.forEach(roi => expect(subject.regionsOfInterest).toContain(roi));
        });
    });

});