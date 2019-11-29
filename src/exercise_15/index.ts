const buildContiguosArrays = (arr: number[], pivotIndex: number = 0, carryGroup: number[][] = []): number[][] => {
    for(let i = pivotIndex; i < arr.length; i++) {
        const group = arr.slice(pivotIndex, i);
        group.length > 0 ? carryGroup.push(group) : null;

        buildContiguosArrays(arr, i + 1, carryGroup);
    }

    return carryGroup;
}


export const exercise_15 = (arr: number[]): number => {
    
    const groups: number[][] = buildContiguosArrays(arr);

    let majorGroupSum = 0;
    let groupSumIndex = -1;

    groups.forEach(arrGroup => {
        if(arrGroup.reduce((prev, current) => prev + current) > majorGroupSum) {
            majorGroupSum = arrGroup.reduce((prev, current) => prev + current);
        }
    });

    return majorGroupSum;
}