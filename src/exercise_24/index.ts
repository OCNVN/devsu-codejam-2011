
class Step {
    constructor() {

    }

    x: number = -1;
    y: number = -1;
}

export const exercise_24 = (labyrinth: boolean[][]): number => {
    const paths: Step[][] = [];

    findPath(labyrinth, paths, [], {x: 0, y: 0});

    let minSteps: number = -1;

    paths.forEach(path => {
        if(minSteps === -1) minSteps = path.length;
        else if(path.length < minSteps) minSteps = path.length;
    })

    return paths.length - 1;
}

const findPath = (labyrinth: boolean[][], paths: Step[][], currentPath: Step[], currentStep: Step) => {
    currentPath.push(currentStep);

    if(currentStep.x === (labyrinth.length - 1) && currentStep.y === (labyrinth[0].length - 1)) {
        paths.push(currentPath);
    } else {
        if((currentStep.x - 1) > 0 && (currentStep.y - 1) > 0 && (currentStep.x - 1) < labyrinth.length && (currentStep.y - 1) < labyrinth[0].length && labyrinth[currentStep.x - 1][currentStep.y - 1] != false) {
            const _labyrinth: boolean[][] = cloneLabyrinth(labyrinth);
            _labyrinth[currentStep.x][currentStep.y] = false;
            findPath(_labyrinth, paths, Object.assign([], currentPath), {x: currentStep.x - 1, y: currentStep.y - 1 });
        }
        if((currentStep.x - 1) > 0 && currentStep.y > 0 && (currentStep.x - 1) < labyrinth.length && (currentStep.y) < labyrinth[0].length && labyrinth[currentStep.x - 1][currentStep.y] != false) {
            const _labyrinth: boolean[][] = cloneLabyrinth(labyrinth);
            _labyrinth[currentStep.x][currentStep.y] = false;
            findPath(_labyrinth, paths, Object.assign([], currentPath), {x: currentStep.x - 1, y: currentStep.y});
        }
        if((currentStep.x - 1) > 0 && (currentStep.y + 1) > 0 && (currentStep.x - 1) < labyrinth.length && (currentStep.y + 1) < labyrinth[0].length && labyrinth[currentStep.x - 1][currentStep.y + 1] != false) {
            const _labyrinth: boolean[][] = cloneLabyrinth(labyrinth);
            _labyrinth[currentStep.x][currentStep.y] = false;
            findPath(_labyrinth, paths, Object.assign([], currentPath), {x: currentStep.x - 1, y: currentStep.y + 1});
        }
        if(currentStep.x > 0 && (currentStep.y + 1 > 0) && (currentStep.x) < labyrinth.length && (currentStep.y + 1) < labyrinth[0].length && labyrinth[currentStep.x][currentStep.y + 1] != false) {
            const _labyrinth: boolean[][] = cloneLabyrinth(labyrinth);
            _labyrinth[currentStep.x][currentStep.y] = false;
            findPath(_labyrinth, paths, Object.assign([], currentPath), {x: currentStep.x, y: currentStep.y + 1});
        }
        if((currentStep.x + 1) > 0 && (currentStep.y + 1) > 0 && (currentStep.x + 1) < labyrinth.length && (currentStep.y + 1) < labyrinth[0].length && labyrinth[currentStep.x + 1][currentStep.y + 1] != false) {
            const _labyrinth: boolean[][] = cloneLabyrinth(labyrinth);
            _labyrinth[currentStep.x][currentStep.y] = false;
            findPath(_labyrinth, paths, Object.assign([], currentPath), {x: currentStep.x + 1, y: currentStep.y + 1});
        }
        if((currentStep.x + 1) > 0 && currentStep.y > 0 && (currentStep.x + 1) < labyrinth.length && (currentStep.y) < labyrinth[0].length && labyrinth[currentStep.x + 1][currentStep.y] != false) {
            const _labyrinth: boolean[][] = cloneLabyrinth(labyrinth);
            _labyrinth[currentStep.x][currentStep.y] = false;
            findPath(_labyrinth, paths, Object.assign([], currentPath), {x: currentStep.x + 1, y: currentStep.y});
        }
        if((currentStep.x + 1) > 0 && (currentStep.y - 1) > 0 && (currentStep.x + 1) < labyrinth.length && (currentStep.y - 1) < labyrinth[0].length && labyrinth[currentStep.x + 1][currentStep.y - 1] != false) {
            const _labyrinth: boolean[][] = cloneLabyrinth(labyrinth);
            _labyrinth[currentStep.x][currentStep.y] = false;
            findPath(_labyrinth, paths, Object.assign([], currentPath), {x: currentStep.x + 1, y: currentStep.y - 1});
        }
        if(currentStep.x > 0 && (currentStep.y - 1) > 0 && (currentStep.x) < labyrinth.length && (currentStep.y - 1) < labyrinth[0].length && labyrinth[currentStep.x][currentStep.y - 1] != false) {
            const _labyrinth: boolean[][] = cloneLabyrinth(labyrinth);
            _labyrinth[currentStep.x][currentStep.y] = false;
            findPath(_labyrinth, paths, Object.assign([], currentPath), {x: currentStep.x, y: currentStep.y - 1});
        }
    }
}

const cloneLabyrinth = (labyrinth: boolean[][]): boolean[][] => {
    const copy: boolean[][] = [];
    
    labyrinth.forEach(row => {
        copy.push(Object.assign([], row));
    })

    return copy;
}