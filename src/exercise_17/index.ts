
const word2numberDictionary: any = {};

word2numberDictionary['zero'] = 0;
word2numberDictionary['one'] = 1;
word2numberDictionary['two'] = 2;
word2numberDictionary['tree'] = 3;
word2numberDictionary['four'] = 4;
word2numberDictionary['five'] = 5;
word2numberDictionary['six'] = 6;
word2numberDictionary['seven'] = 7;
word2numberDictionary['eight'] = 8;
word2numberDictionary['nine'] = 9;
word2numberDictionary['ten'] = 10;
word2numberDictionary['eleven'] = 11;
word2numberDictionary['twelve'] = 12;
word2numberDictionary['thirteen'] = 13
word2numberDictionary['fourteen'] = 14;
word2numberDictionary['fiveteen'] = 15;
word2numberDictionary['sixteen'] = 16;
word2numberDictionary['seventeen'] = 17;
word2numberDictionary['eighteen'] = 18;
word2numberDictionary['nineteen'] = 19;
word2numberDictionary['twenty'] = 20;
word2numberDictionary['thirty'] = 30;
word2numberDictionary['forty'] = 40;
word2numberDictionary['fifty'] = 50;
word2numberDictionary['sixty'] = 60;
word2numberDictionary['seventy'] = 70;
word2numberDictionary['eighty'] = 80;
word2numberDictionary['ninety'] = 90;
word2numberDictionary['one hundred'] = 100;
word2numberDictionary['two hundred'] = 200;


export const exercise_17 = (str: string): number => {
    let strLower = str.toLowerCase();

    let hundreds: number = 0;
    if(strLower.startsWith('one hundred')) hundreds = 100;
    if(strLower.startsWith('two hundred')) hundreds = 200;

    strLower = strLower.replace('one hundred', '');
    strLower = strLower.replace('two hundred', '');

    const words = strLower.split(' ');

    if(words.length === 1) {
        words.unshift('');
        words.unshift('');
    }
    if(words.length === 2) {
        words.unshift('');
    }

    let tent: number = word2numberDictionary[words[1]] ? word2numberDictionary[words[1]] : 0;
    let unit: number = word2numberDictionary[words[2]] ? word2numberDictionary[words[2]] : 0;

    
    return hundreds + tent + unit;
}