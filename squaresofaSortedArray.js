// Given an integer array nums sorted in non-decreasing order, return an array of the squares of each number sorted in non-decreasing order.

// var sortedSquares = function(nums) {
    
//     //map array, then sort it
//     nums = nums.map( el => Math.pow(el,2)).sort((a,b)=> a-b);
//     //using ES6 Exponentiation:
//     // nums = nums.map( el => el ** 2).sort((a,b)=> a-b);
//     console.log(nums);


// };
// sortedSquares([-4,-1,0,3,10]);

var sortedSquares2 = function(nums) {
    const result = new Array(nums.length).fill(0);
    let left = 0;
    let right = nums.length - 1;
    let i = right;
    while (left <= right) {
        if (nums[left] ** 2 > nums[right] ** 2) {
            result[i--] = nums[left++] ** 2;
        } else {
            result[i--] = nums[right--] ** 2;
        }
    }
    console.log(result);
    return result;
};
sortedSquares2([-4,-1,0,3,10]);