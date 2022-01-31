// Write a function that reverses a string. The input string is given as an array of characters s.

// You must do this by modifying the input array in-place with O(1) extra memory.
/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
 var reverseString = function(s) {
    
    //reverse:
    s.reverse();
    console.log(s);

};

reverseString(["h","e","l","l","o"]); //["o","l","l","e","h"]
reverseString(["H","a","n","n","a","h"]);