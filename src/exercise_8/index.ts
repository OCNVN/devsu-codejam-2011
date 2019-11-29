export const exercise_8 = (s1: string, search: string = 'a'): number => {
    const searchUpper: string = search.toUpperCase();
    const searchLower: string = search.toLowerCase();

    const words: string[] = [];

    let _wordTemp: string = '';
    [...s1].forEach(_character => {
        if(_character === ' ' || _character === ',' || _character === ';' || _character === '.' && _wordTemp.length > 0) {
            words.push(_wordTemp);
            _wordTemp = '';
        } else {
            _wordTemp = _wordTemp + _character;
        }
    });

    const wordsFound: string[] = [...words].filter(word => {
        return [...word].filter(_character => _character === searchUpper || _character === searchLower).length > 0;
    });

    return wordsFound.length;
}