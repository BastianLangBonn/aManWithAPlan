import { runToTheHills } from "../data/TestProblems";
import { Solver } from "../logic/Solver";
import { Problem } from "../model/Problem";
import { Solution } from "../model/Solution";

describe("Run to the Hills", () =>
    test("should resolve in 9 turns", () => {
        const problem: Problem = new Problem(runToTheHills);
        const solution: Solution = Solver.solve(problem);
        expect(solution.numberOfTurns).toEqual(9);
    })
);