import { hallOfTheMountainKing, riseOfTheChaosWizard, runToTheHills, theRiver } from "../data/TestProblems";
import { Solver } from "../logic/Solver";
import { Problem } from "../model/Problem";
import { Solution } from "../model/Solution";

const testForDuration = (encodedProblem: string[], numberOfTurns: number) => {
    const problem: Problem = new Problem(encodedProblem);
    const solution: Solution = Solver.solve(problem);
    expect(solution.numberOfTurns).toEqual(numberOfTurns);
}

describe("Run to the Hills", () =>
    test("should resolve in 9 turns", () => {
        testForDuration(runToTheHills, 9);
    })
);

describe("Hall of the mountain king", () => {
    test("should resolve in 25 turns", () => {
        testForDuration(hallOfTheMountainKing, 25);
    });
});

describe("The River", () => {
    test("should resolve in 17 turns", () => {
        testForDuration(theRiver, 17);
    });
});

describe("Rise of the chaos wizard", () => {
    test("should resolve in 18 turns", () => {
        testForDuration(riseOfTheChaosWizard, 18);
    });
});