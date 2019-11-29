export const exercise_4 = (s1: String, s2: string): string => {
    let result: string = '';

    [...s1].forEach(s1_char => {
        let exists: boolean = false;
        [...s2].forEach(s2_char => {
            if(`${s1_char}`.toUpperCase() === `${s2_char}`.toUpperCase()) exists = true; return;
        });

        if(!exists) result = `${result}${s1_char}`;
    });

    return result;
}