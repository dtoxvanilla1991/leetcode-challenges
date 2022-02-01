/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    //declaring global v:
    const romans = {
        "I": 1,
        "V": 5,
        "X": 10,
        "L": 50,
        "C": 100,
        "D": 500,
        "M": 1000,
    };
    const exceptions = {
        "IV": 4,        
        "IX": 9,        
        "XL": 40,        
        "XC": 90,        
        "CD": 400,
        "CM": 900        
    };
    let i = 0, answer = 0;
    //looping:
    while(i<s.length) {
        if(exceptions[s[i]+s[i+1]]){
            answer += exceptions[s[i]+s[i+1]];
            i+=2;
        }else {
            answer += romans[s[i]];
            i++;
        }
    }
    //output:
    return answer;
};
console.log(romanToInt("LVIII"));