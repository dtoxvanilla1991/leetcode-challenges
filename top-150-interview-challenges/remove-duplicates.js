// 80. Remove Duplicates from Sorted Array II

// has to be O(1) space
let nums = [1, 1, 1, 2, 2, 3, 3, 3, 4, 4, 5];
let k = removeDuplicates(nums);

function removeDuplicates(nums) {
  if (nums.length < 3) return nums.length;

  let k = 2;

  for (let i = 2; i < nums.length; i++) {
    if (nums[i] !== nums[k - 2]) {
      nums[k] = nums[i];
      k++;
    }
  }

  return k;
}
console.log(nums);
console.log(k);
