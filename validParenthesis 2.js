// Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

// An input string is valid if:

// Open brackets must be closed by the same type of brackets.
// Open brackets must be closed in the correct order

/**
 * @param {string} s
 * @return {boolean}
 */
 var isValid = function(s) {
    const array = [];
    const tags = {
        "(": ")",
        "[": "]",
        "{": "}",
    };
    
    for (let el of s) {
        if (el === tags[array[array.length-1]])
            if (array.length > 0)
                array.pop();
            else
                return false;
        else
            array.push(el);
    }
    
    return array.length === 0;
};
isValid("{[]}");