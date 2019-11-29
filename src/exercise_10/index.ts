let isPerfectNumber = (num: number): boolean => {
    let isPerfect: boolean = false;

    const divisors: number[] = [];

    for(let div = 1; div < num; div++) {
        if(num % div === 0) divisors.push(div);
    }

    let sum: number = 0;
    divisors.forEach(divisor => {
        if(sum < num) {
            sum += divisor;
        }
    })

    if(sum === num) {
        isPerfect = true;
    }

    return isPerfect;
}

export const exercise_10 = (x: number, y: number): number => {
    let smallPerfectNumber: number = -1;

    for(let num = x; num <= y; num++) {
        if(isPerfectNumber(num)) {
            smallPerfectNumber = num;
            break;
        }
    }

    return smallPerfectNumber;
}