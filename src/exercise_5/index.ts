export const exercise_5 = (sortedArray: number[]): number[] => {
    return sortedArray.filter((value, index) => value !== sortedArray[index + 1])
}