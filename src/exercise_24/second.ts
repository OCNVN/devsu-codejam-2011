
class Step {
    row: number = 0;
    column: number = 0;
}

export const exercise_24_2 = (labyrinth: boolean[][]): number => {
    const paths: Step[][] = [];

    findPath(labyrinth, [], {row: 0, column: 0}, paths);

    const lengths: number[] = paths.map(path => path.length).sort();

    if(lengths.length === 0) return -1;

    return lengths[0] - 1;
}

const findPath = (labyrinth: boolean[][], currentPath: Step[], currentStep: Step, paths: Step[][]) => {
    currentPath.push(currentStep);

    if(currentStep.column === (labyrinth[0].length - 1) && currentStep.row === (labyrinth.length - 1)) {
        paths.push(currentPath);
    } else {
        let clonedLabyrinth: boolean [][] = [];
        let nextStep: Step;

        nextStep = {row: (currentStep.row - 1), column: (currentStep.column - 1)};
        clonedLabyrinth = cloneLabyrinth(labyrinth);
        clonedLabyrinth[currentStep.row][currentStep.column] = false;
        if(isValidStep(nextStep, clonedLabyrinth)) findPath(clonedLabyrinth, Object.assign([], currentPath), nextStep, paths);

        nextStep = {row: (currentStep.row - 1), column: (currentStep.column)};
        clonedLabyrinth = cloneLabyrinth(labyrinth);
        clonedLabyrinth[currentStep.row][currentStep.column] = false;
        if(isValidStep(nextStep, clonedLabyrinth)) findPath(clonedLabyrinth, Object.assign([], currentPath), nextStep, paths);

        nextStep = {row: (currentStep.row - 1), column: (currentStep.column + 1)};
        clonedLabyrinth = cloneLabyrinth(labyrinth);
        clonedLabyrinth[currentStep.row][currentStep.column] = false;
        if(isValidStep(nextStep, clonedLabyrinth)) findPath(clonedLabyrinth, Object.assign([], currentPath), nextStep, paths);

        nextStep = {row: (currentStep.row), column: (currentStep.column + 1)};
        clonedLabyrinth = cloneLabyrinth(labyrinth);
        clonedLabyrinth[currentStep.row][currentStep.column] = false;
        if(isValidStep(nextStep, clonedLabyrinth)) findPath(clonedLabyrinth, Object.assign([], currentPath), nextStep, paths);

        nextStep = {row: (currentStep.row + 1), column: (currentStep.column + 1)};
        clonedLabyrinth = cloneLabyrinth(labyrinth);
        clonedLabyrinth[currentStep.row][currentStep.column] = false;
        if(isValidStep(nextStep, clonedLabyrinth)) findPath(clonedLabyrinth, Object.assign([], currentPath), nextStep, paths);

        nextStep = {row: (currentStep.row + 1), column: (currentStep.column)};
        clonedLabyrinth = cloneLabyrinth(labyrinth);
        clonedLabyrinth[currentStep.row][currentStep.column] = false;
        if(isValidStep(nextStep, clonedLabyrinth)) findPath(clonedLabyrinth, Object.assign([], currentPath), nextStep, paths);

        nextStep = {row: (currentStep.row + 1), column: (currentStep.column - 1)};
        clonedLabyrinth = cloneLabyrinth(labyrinth);
        clonedLabyrinth[currentStep.row][currentStep.column] = false;
        if(isValidStep(nextStep, clonedLabyrinth)) findPath(clonedLabyrinth, Object.assign([], currentPath), nextStep, paths);

        nextStep = {row: (currentStep.row), column: (currentStep.column - 1)};
        clonedLabyrinth = cloneLabyrinth(labyrinth);
        clonedLabyrinth[currentStep.row][currentStep.column] = false;
        if(isValidStep(nextStep, clonedLabyrinth)) findPath(clonedLabyrinth, Object.assign([], currentPath), nextStep, paths);
    }
}

const isValidStep = (step: Step, labyrinth: boolean[][]): boolean => {
    if(step.column < 0 || step.row < 0) return false;
    if(step.column >= labyrinth[0].length || step.row >= labyrinth.length) return false;
    if(labyrinth[step.row][step.column] === false) return false;

    return true;
}

const cloneLabyrinth = (labyrinth: boolean[][]): boolean[][] => {
    const cloned: boolean[][] = []

    labyrinth.forEach(row => {
        cloned.push(Object.assign([], row));
    })

    return cloned;
}