/**
 * Given an integer array nums sorted in non-decreasing order, 
 * remove some duplicates in-place such that each unique element appears at most twice. 
 * The relative order of the elements should be kept the same.
 * Since it is impossible to change the length of the array in some languages, you must instead have the result be placed in the first part of the array nums. 
 * More formally, if there are k elements after removing the duplicates, then the first k elements of nums should hold the final result. 
 * It does not matter what you leave beyond the first k elements.
 * @param {number[]} nums
 * @return {number}
 */

var removeDuplicates = function (nums) {
    let j = 0;

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] !== nums[i + 2]) {
            nums[j] = nums[i];
            j++;
        }
    }

    return j;
};

// Example usage:
const nums = [0, 0, 1, 1, 1, 1, 2, 3, 3];
const result = removeDuplicates(nums);
console.log(result);