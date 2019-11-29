
export const exercise_19 = (num: number): number => {
    const bits: number[] = [];

    let divisor = num;
    while(true) {
        const remainder = divisor % 2;
        bits.push(remainder);
        divisor = Math.floor(divisor / 2)

        if(divisor === 0) break;
    }

    return bits.reduce((prev, current) => prev + current);
}