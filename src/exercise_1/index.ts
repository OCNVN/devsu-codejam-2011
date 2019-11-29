export const exercise_1 = (x: number, y: number): number => {
    if(x <= 0 || x > 255) return -1;
    if(y <= 0 || y > 255) return -1;

    const serie: number[] = [1,4,5,4,2,3,5,-9,5,4,32,6,43,23];

    return serie[x - 1] + serie[y - 1];
}