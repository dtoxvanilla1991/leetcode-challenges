// Given a sorted array of distinct integers and a target value, return the index if the target is found. 
// If not, return the index where it would be if it were inserted in order.

// You must write an algorithm with O(log n) runtime complexity.
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
 var searchInsert = function(nums, target) { 
    
    let s = 0;
    let e = nums.length-1;

    while(s <= e){
        let m = s + Math.trunc((e-s)/2);
        if(target == nums[m]) return m;
        target < nums[m] ? e = m - 1 : s = m + 1; 
    }
 return e + 1;
};
searchInsert([1,3,5,6], 2);