import { Solver } from "../logic/Solver";
import { Problem } from "../model/Problem";
import { Solution } from "../model/Solution";


test("Run to the Hills should resolve in 9 turns", () => {
    const encodedMap = [
        "5 5 3",
        "PRINCESS",
        "GGGGI",
        "GGGGG",
        "GGIGG",
        "GGGGG",
        "IGGGG",
        "HOUSE 0 4",
        "CASTLE 4 0",
        "PRINCESS 2 2"];
    const problem: Problem = new Problem(encodedMap);

    const solution: Solution = Solver.solve(problem);

    expect(solution).toEqual(9);
});

/*
Run to the hills
5 5 3
PRINCESS
GGGGI
GGGGG
GGIGG
GGGGG
IGGGG
HOUSE 0 4
CASTLE 4 0
PRINCESS 2 2
->
9

Hall of the mountain king
5 5 4
TREASURE
IMMMI
MMMMM
GGIMM
GGGGG
IGGGG
HOUSE 0 4
CASTLE 4 0
STABLE 2 2
TREASURE 0 0
->
25

The river
5 5 4
DRAGON
IGGGI
GGGGG
WWWWW
GGGGG
IIGGG
HOUSE 0 4
CASTLE 0 0
BLACKSMITH 1 4
DRAGON 4 0
->
17

Rise of the chaos wizard
5 5 4
TREASURE
GGGGI
IGGGG
RRRRR
IGGGG
GGGGI
HOUSE 4 4
CASTLE 4 0
WIZARD 0 3
TREASURE 0 1
-> 18
*/