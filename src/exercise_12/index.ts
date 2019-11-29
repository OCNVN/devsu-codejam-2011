
export const exercise_12 = (arr: number[]): number => {
    let pivot: number = -1;



    for(let i = 0; i < arr.length - 1; i++) {
        let leftGroup: number[];
        let rightGrup: number[];

        leftGroup = arr.slice(0, i);
        rightGrup = arr.slice(i + 1, arr.length);

        let leftSum = leftGroup.length > 0 ? leftGroup.reduce((previous, current) => previous + current) : 0;
        let rightSum = rightGrup.length > 0 ?  rightGrup.reduce((previous, current) => previous + current): 0;

        if(leftSum === rightSum) {
            pivot = i;
            break;
        }
    }

    return pivot;
}