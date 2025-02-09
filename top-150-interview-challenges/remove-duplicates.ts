// 80. Remove Duplicates from Sorted Array II

// has to be O(1) space
let nums: (number | string)[] = [0, 0, 0, 0, 0];
let k = removeDuplicates(nums);

function removeDuplicates(nums: (number | string)[]): number {
  let current = 1;
  let count = 0;
  for (let i = 1; i < nums.length; i++) {
    if (nums[i] !== nums[i - 1]) {
      count = 0;
      nums[current++] = nums[i];
    } else {
      count++;
      if (count < 2) nums[current++] = nums[i];
    }
  }
  return current;
}
console.log(nums);
console.log(k);
