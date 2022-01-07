// Given a string s, partition s such that every substring of the partition is a palindrome. Return all possible palindrome partitioning of s.

// A palindrome string is a string that reads the same backward as forward.

/**
 * @param {string} s
 * @return {string[][]}
 */
var partition = function (s) {
    //globals:
    const answer = [];
    //set up validation for a proper palindrome:
    const validatePalindrome = (str) => {
        let left = 0,
            right = str.length - 1;
        while (left < right) {
            if (str[left] != str[right]) return false;
            left++;
            right--;
        }
        return true;
    };

    const finalize = (str, results) => {
        if (!str.length) answer.push(results);

        for (let i = 1; i <= str.length; i++) {
            const current = str.slice(0, i);
            if (validatePalindrome(current)) {
                finalize(str.slice(i), [...results, current]);
            }
        }

    };
    finalize(s, []);
    return answer;

};
partition("aab");