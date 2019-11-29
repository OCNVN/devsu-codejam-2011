const operands: string[] = ['SUM', 'RES', 'MUL'];
let operandIndex: number = 0;
let isFirst: boolean = true;


export const exercise_22 = (matrix: number[][]): number => {
    let result: number = 0;

    while(true) {
        result = eatFirst(result, matrix);
        if(matrix.length === 0) break;
        result = eatSecond(result, matrix);
        if(matrix.length === 0) break;
        result = eatThird(result, matrix);
        if(matrix.length === 0) break;
        result = eatFourt(result, matrix);
        if(matrix.length === 0) break;
    }

    return result;
}

const eatFirst = (acum: number, matrix: number[][]): number => {
    matrix.splice(0, 1)[0].forEach(num => acum = operate(acum, num));

    return acum;
}

const eatSecond = (acum: number, matrix: number[][]): number => {
    matrix.forEach(row => acum = operate(acum, row.splice(row.length - 1, 1)[0]) );

    return acum;
}

const eatThird = (acum: number, matrix: number[][]): number => {
    matrix.splice(matrix.length - 1, 1)[0].reverse().forEach(num => acum = operate(acum, num));

    return acum;
}

const eatFourt = (acum: number, matrix: number[][]): number => {
    matrix.map(row =>  row.splice(0, 1)[0]).reverse().forEach(num => acum = operate(acum, num));

    return acum;
}

const operate = (acum: number, num: number): number => {
    let result: number = 0;
    const operand = operands[operandIndex];

    switch(operand) {
        case 'SUM':
            result = acum + num;
            break;
        case 'RES':
            result = acum - num;
            break;
        case 'MUL':
            result = acum * num;
            break;
    }

    if(operandIndex === operands.length - 1) {
        operandIndex = 0;
    } else if (!isFirst) {
        operandIndex ++;
    } else if (isFirst) {
        isFirst = false;
    }

    return result;
}