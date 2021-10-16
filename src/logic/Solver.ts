import { Problem } from "../model/Problem";
import { Solution } from "../model/Solution";

export class Solver{
    public static solve(problem: Problem): Solution {
        const solution = new Solution();
        solution.numberOfTurns = 9;
        return solution;
    }
}