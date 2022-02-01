// Write a function to find the longest common prefix string amongst an array of strings.
// If there is no common prefix, return an empty string "".
/**
 * @param {string[]} strs
 * @return {string}
 */
 var longestCommonPrefix = function(strs) {
     if(strs[0].length == 0){
         return "";
     } else if (strs.length == 1) {
         return strs[0];
     }
    const word = strs[0][Symbol.iterator]();
    let fullWord = '';
    let result;
    let i = 0;
    for(let match of word){
        fullWord+= match;
      const works = (word) => word.startsWith(fullWord);
        result = strs.every(works);
        if(result == true){
            i++;
        } else {
            result = i > 0 ? fullWord.substring(0, i) : "";
            return result;
        }
    }
    return fullWord;
};
longestCommonPrefix(["flower","flower","flower","flower"]);
