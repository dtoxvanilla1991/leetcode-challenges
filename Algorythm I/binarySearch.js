// Given an array of integers nums which is sorted in ascending order, and an integer target, write a function to search target in nums.
//  If target exists, then return its index. Otherwise, return -1.

// You must write an algorithm with O(log n) runtime complexity.
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
 var search = function(nums, target) {
     let start = 0;
     let end = nums.length-1;
    function findIt (nums, target, start, end){
        if(start > end) return -1;

        let mid = Math.floor((start+end)/2);
        if(nums[mid] === target) return mid;
        if(nums[mid] > target) return findIt(nums, target, start, mid-1);
        return findIt(nums, target, mid+1, end);
    }
    return findIt(nums, target, start, end);
};
search([-1,0,3,5,9,12], 9);