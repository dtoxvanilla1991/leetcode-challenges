// 80. Remove Duplicates from Sorted Array II

// has to be O(1) space
let nums: (number | string)[] = [0, 0, 1, 1, 1, 1, 2, 3, 3];
let k = removeDuplicates(nums);

function removeDuplicates(nums: (number | string)[]): number {
  // loop through nums array
  // if the number appears more than twice in the array, move it to the end of the array
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === nums[i + 1] && nums[i] === nums[i + 2]) {
      nums.splice(i, 1);
      nums.push("_");
      i--;
    }
  }

  return nums.indexOf("_");
}
console.log(nums);
console.log(k);
