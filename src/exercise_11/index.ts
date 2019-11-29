
export const exercise_11 = (arr: number[]): number => {
    let groupsDictionary: any = {};

    for(let i = 0; i <= arr.length; i++) {
        groupsDictionary[`${arr[i]}`] = groupsDictionary[`${arr[i]}`] || [];

        groupsDictionary[`${arr[i]}`].push(arr[i]);
    }

    const dictionaryKeys: string[] = Object.keys(<object> groupsDictionary);
    let groupCountsDictionary: any = {};
    let highestRepetitions: number = 0;
    

    for(let i = 0; i <= dictionaryKeys.length; i++) {
        groupCountsDictionary[dictionaryKeys[i]] = groupsDictionary[dictionaryKeys[i]].length;
        if(groupCountsDictionary[dictionaryKeys[i]] > highestRepetitions) highestRepetitions = groupCountsDictionary[dictionaryKeys[i]];
    }

    
    let highestRepetitionsKeys: string[] = [];
    for(let i = 0; i <= dictionaryKeys.length; i++) {
        
        if(groupCountsDictionary[dictionaryKeys[i]] === highestRepetitions) highestRepetitionsKeys.push(dictionaryKeys[i]);
    }



    return Number(highestRepetitionsKeys.sort()[0]);
}