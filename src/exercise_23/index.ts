
export const exercise_23 = (expression: string): number => {
    let result: number = 0;

    result = calculate(expression.split(' '));

    return result;
}

const calculate = (members: string[]): number => {
    let result: number = 0;

    let operands: number[] = [];

    while(true) {
        if(members.length === 0) {
            return operands[0];
        }

        let member = members.splice(0, 1)[0];

        switch(member) {
            case '+': {
                let a = Number(operands.pop());
                let b = Number(operands.pop());
                operands.push(b + a);
                break;
            }  
            case '-': {
                let a = Number(operands.pop());
                let b = Number(operands.pop());
                operands.push(b - a);
                break;
            }  
            case '*': {
                let a = Number(operands.pop());
                let b = Number(operands.pop());
                operands.push(b * a);
                break;
            }  
            case '/': {
                let a = Number(operands.pop());
                let b = Number(operands.pop());
                operands.push(b / a);
                break;
            }  
            case '^': {
                let a = Number(operands.pop());
                let b = Number(operands.pop());
                operands.push(a + b);
                break;
            }
            default: {
                operands.push(Number(member));
            }
        }
    }

    return result;
}