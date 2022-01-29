// Given an array, rotate the array to the right by k steps, where k is non-negative.

// var rotate = function(nums, k) {
    
//     while(k){

//         let t = nums.pop();
//         nums.unshift(t);
//         k--;
//     }
//     return nums;
// };
// rotate([1,2,3,4,5,6,7], 3);

// var rotate = function(nums, k) {
    
//     let t = nums.splice((nums.length-k));
//     // nums == [...t, ...nums];
//     nums = t.concat(nums);
//     console.log(nums);
//     return nums;

// };
// rotate([-1,-100,3,99], 2);

var rotate = function(nums, k) {
    
    nums.unshift(...nums.splice(k > nums.length ? nums.length - (k % nums.length) : nums.length - k));
};
rotate([-1,-100,3,99], 2);