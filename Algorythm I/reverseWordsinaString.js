// Given a string s, reverse the order of characters in each word within a sentence while still preserving whitespace and initial word order.
/**
 * @param {string} s
 * @return {string}
 */
 var reverseWords = function(s) {
    
    s = s.split(' ').map(word => word.split("").reverse().join(""));
    s = s.join(" ");
    return s;
};
reverseWords("Let's take LeetCode contest"); //"s'teL ekat edoCteeL tsetnoc"
reverseWords("God Ding");