export const exercise_9 = (num: number): boolean => {
    let isPower: boolean = false;

    for(let i = 1; i <= num; i++) {
        if ((i * i) === num) {
            isPower = true; 
            break;
        }
    }

    return isPower;
}