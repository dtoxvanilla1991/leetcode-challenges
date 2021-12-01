/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
    if (s == '' || s == undefined) {
        return 0;
    }
    s = s.split('');
    let possibleAnswer = [];
    let finalAnswer = [];
    for (let i = 0; i <= s.length - 1; i++) {
        possibleAnswer = [];
        for (let k = 0 + i; k <= s.length - 1; k++) {
            possibleAnswer.push(s[k]);
            if (possibleAnswer.includes(s[k + 1]))
                break;
        }
        if (possibleAnswer == 0) {
            possibleAnswer.length = 1;
        }
        finalAnswer = finalAnswer.length > possibleAnswer.length ? finalAnswer : possibleAnswer;
    }
    return finalAnswer.length;
};
console.log(lengthOfLongestSubstring(""));