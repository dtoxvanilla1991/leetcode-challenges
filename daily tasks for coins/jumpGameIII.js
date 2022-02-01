/**
 * @param {number[]} arr
 * @param {number} start
 * @return {boolean}
 * Given an array of non-negative integers arr, you are initially positioned at start index of the array. 
 * When you are at index i, you can jump to i + arr[i] or i - arr[i], check if you can reach to any index with value 0.
 * Notice that you can not jump outside of the array at any time.
 */
var canReach = function (arr, start) {
    const jump = new Array(arr.length).fill(false);

    let answer = (index) => {
        if (arr[index] == 0) {
            return true;
        }

        if (index < 0 || index > arr.length || jump[index]) {
            return false;
        }

        jump[index] = true;

        return answer(index - arr[index]) || answer(index + arr[index]);
    }

    return answer(start);
};
console.log(canReach([1, 3, 0, 4, 6], 0));