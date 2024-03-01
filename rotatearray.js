/**
 * Given an integer array nums, rotate the array to the right by k steps, where k is non-negative.
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
*/

var rotate = function (nums, k) {
    while (nums.length <= k) {
        k = k - nums.length;
    }
    const temp = nums.splice(0, nums.length - k);
    nums.push(...temp);

    return nums;
};

// Example usage:
const nums = [1, 2, 3, 4, 5, 6, 7];
const k = 3;
const result = rotate(nums, k);
console.log(result);