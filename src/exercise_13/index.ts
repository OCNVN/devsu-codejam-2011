
export const exercise_13 = (arr: number[]): number[] => {
    const negativeArray: number[] = [];
    const positiveArray: number[] = [];


    for(let i = 0; i < arr.length; i++) {
        if(arr[i] < 0) 
            negativeArray.push(arr[i]) 
        else 
            positiveArray.push(arr[i])
    }

    for(let i = 0; i < positiveArray.length; i++) {
        negativeArray.push(positiveArray[i]);
    }

    return negativeArray;
}