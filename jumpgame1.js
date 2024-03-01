/**
 * You are given an integer array nums. 
 * You are initially positioned at the array's first index, and each element in the array represents your maximum jump length at that position.
 * Return true if you can reach the last index, or false otherwise.
 * @param {number[]} nums
 * @return {boolean}

*/

var canJump = function (nums) {
    let targetNumIndex = nums.length - 1;

    for (let i = nums.length - 2; i >= 0; i--) {
        if (targetNumIndex <= i + nums[i]) {
            targetNumIndex = i;
        }
    }

    return targetNumIndex === 0 ? true : false;

};
// Example usage:
const nums = [2, 3, 1, 1, 4];
const result = canJump(nums);
console.log(result);