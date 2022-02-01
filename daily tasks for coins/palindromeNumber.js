/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function (x) {
    let backwards = '';
    let arrX = (String(x).split(''));
    for (let i = arrX.length - 1; i >= 0; i--) {
        backwards += arrX[i];
    }
    let answer = x == backwards ? true : false;
    console.log(answer);
    return answer;
};
isPalindrome(-101);