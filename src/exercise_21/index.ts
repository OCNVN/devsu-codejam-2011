
export const exercise_21 = (matrix: string[][]): string => {
    let result = '';

    

    while(true) {
        result += eatFirst(matrix);
        if(matrix.length === 0) break;
        result += eatSecond(matrix);
        if(matrix.length === 0) break;
        result += eatThird(matrix);
        if(matrix.length === 0) break;
        result += eatFourt(matrix);
        if(matrix.length === 0) break;
    }

    return result;
}

const eatFirst = (matrix: string[][]): string => {
    return matrix.splice(0, 1)[0].join('');
}

const eatSecond = (matrix: string[][]): string => {
    let result = '';

    matrix.forEach(row => result = `${result}${row.splice(row.length - 1, 1)}` );
    return result;
}

const eatThird = (matrix: string[][]): string => {
    return matrix.splice(matrix.length - 1, 1)[0].reverse().join('');
}

const eatFourt = (matrix: string[][]): string => {
    let result = '';

    matrix.forEach(row =>  result = `${row.splice(0, 1)}${result}`);
    return result;
}