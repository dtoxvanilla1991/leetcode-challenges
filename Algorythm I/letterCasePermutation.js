var letterCasePermutation = function(s) {
    if(!s.length){
        return [s];
    }
    const combinations = letterCasePermutation(s.slice(1));
    const letters = {[s[0].toLowerCase()]:true, [s[0].toUpperCase()]: true};
    const result = [];
    for(const combination of combinations){
        for(const letter in letters){
            result.push(letter + combination);
        }
    }
    console.log(result);
    return result;
};
letterCasePermutation("a1b2"); //["a1b2","a1B2","A1b2","A1B2"]