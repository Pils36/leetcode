/**
 * Given an array nums of size n, return the majority element.
 * The majority element is the element that appears more than ⌊n / 2⌋ times. 
 * You may assume that the majority element always exists in the array.
 * @param {number[]} nums
 * @returns {number}
 */

var majorityElement = function (nums) {
    let count = 0
    let candidate
    for (let i = 0; i < nums.length; i++) {
        if (count === 0) {
            candidate = nums[i]
            count = 1
        } else if (candidate === nums[i]) {
            count++
        } else {
            count--
        }
    }

    return candidate
};

// Example usage:
const nums = [2, 2, 1, 1, 1, 2, 2];
const result = majorityElement(nums);
console.log(result);