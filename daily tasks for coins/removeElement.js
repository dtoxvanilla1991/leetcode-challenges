/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
//  Given an integer array nums and an integer val, remove all occurrences of val in nums in-place. The relative order of the elements may be changed.
// Return k after placing the final result in the first k slots of nums.
// Do not allocate extra space for another array. You must do this by modifying the input array in-place with O(1) extra memory.
var removeElement = function(nums, val) {
    let k = 0;
    for (let i = 0; i <= nums.length - 1; i++) {
        if (nums[i] === val) {
            k++;
        } else {
            if (k) {
                nums[i - k] = nums[i];
                nums[i] = val;
            }
        }
    }
    
    return nums.length - k;
};
removeElement([3,2,2,3,4,7,3], 3);