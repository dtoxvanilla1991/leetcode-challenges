// Given a string s, find the length of the longest substring without repeating characters.

/**
 * @param {string} s
 * @return {number}
 */
//HOW I PREVIOUSLY SOLVED IT:
//  var lengthOfLongestSubstring = function (s) {
//     if (s == '' || s == undefined) {
//         return 0;
//     }
//     s = s.split('');
//     let possibleAnswer = [];
//     let finalAnswer = [];
//     for (let i = 0; i <= s.length - 1; i++) {
//         possibleAnswer = [];
//         for (let k = 0 + i; k <= s.length - 1; k++) {
//             possibleAnswer.push(s[k]);
//             if (possibleAnswer.includes(s[k + 1]))
//                 break;
//         }
//         if (possibleAnswer == 0) {
//             possibleAnswer.length = 1;
//         }
//         finalAnswer = finalAnswer.length > possibleAnswer.length ? finalAnswer : possibleAnswer;
//     }
//     return finalAnswer.length;
// };

var lengthOfLongestSubstring = function(s) {
    var last = new Map();
    var start = 0;
    var longest = 0;
    s = s.split('');
    s.forEach((item, index) => {
        if(last[item] >= start)
            start = last[item] + 1;
        longest = Math.max(longest, index-start+1);
        last[item] = index;
    });
    return longest;
};
lengthOfLongestSubstring("abcabcbb"); //The answer is "abc", with the length of 3.
lengthOfLongestSubstring("bbbbb"); //The answer is "b", with the length of 1.
lengthOfLongestSubstring("pwwkew"); //The answer is "wke", with the length of 3.