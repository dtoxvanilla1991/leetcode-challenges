/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function (nums) {
    let absMax = nums[0];
    let posMax = 1;
    let negMax = 1;

    for (let i = 0; i < nums.length; i++) {
        temp = posMax;
        posMax = Math.max(Math.max(posMax * nums[i], negMax * nums[i]), nums[i]);
        negMax = Math.min(Math.min(negMax * nums[i], temp * nums[i]), nums[i]);
        absMax = Math.max(posMax, absMax);
    }
    return absMax;
};
maxProduct([-2, 3, -4]);