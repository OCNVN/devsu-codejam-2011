
const sort = (str: string[], pivot: number = 0): string[] =>  {
    
    for(let i = pivot; i < str.length; i++) {
        if(str[i] > str[i + 1]) {
            let aux = str[i];
            str[i] = str[i + 1];
            str[i + 1] = aux;
        }
    }
    
    if(pivot + 1 < str.length) {
        str = sort(str, pivot + 1);
    }
    

    return str;
}

export const exercise_18 = (str: string[]): string[] => {
    return sort(str);
}