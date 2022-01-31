// Given an integer array nums, move all 0's to the end of it while maintaining the relative order of the non-zero elements.

// Note that you must do this in-place without making a copy of the array.
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
 var moveZeroes = function(nums) {
    let lastZero =0;
    for(let i=0;i<nums.length;i++){
        if(nums[i]!=0){
            [nums[lastZero],nums[i]] = [nums[i],nums[lastZero]];
            lastZero++;
        }
    }
    return nums;
};
moveZeroes([0,0,0,3,12]); //[1,3,12,0,0]
moveZeroes([0]);