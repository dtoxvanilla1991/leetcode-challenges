var lengthOfLongestSubstring = function (s) {

    let maxString = '';
    let runningString = maxString;

    for (let i = 0; i < s.length; i++) {
        if (!runningString.includes(s.charAt(i))) {
            runningString += s.charAt(i);
        } else {
            let offSet = runningString.indexOf(s.charAt(i)) + 1;
            runningString = runningString.slice(offSet) + s.charAt(i);
        }
        maxString = maxString.length > runningString.length ? maxString : runningString;
    }
    return maxString.length;
};
console.log(lengthOfLongestSubstring("abcabcbb"));