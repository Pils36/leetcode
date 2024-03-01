/**
 * Divide Array Into Arrays With Max Difference
 * Given an array of integers nums and an integer k, divide the array into subarrays of size 3,
 * such that the difference between the maximum and minimum element in each subarray is at most k.
 * If it's not possible to achieve this, return an empty array.
 *
 * @param {number[]} nums - The array of integers.
 * @param {number} k - The maximum allowed difference between the maximum and minimum elements.
 * @return {number[][]} - Array of subarrays meeting the criteria.
 */
const divideArray = function (nums, k) {
    // Step 1: Sort the input array in ascending order.
    nums.sort((a, b) => a - b);

    // Step 2: Initialize the result array to store subarrays meeting the criteria.
    let result = [];

    // Step 3: Iterate through the sorted array with a step of 3.
    for (let i = 2; i < nums.length; i += 3) {
        // Step 4: Check if the difference between the maximum and minimum elements in the current subarray is within the allowed limit (k).
        if (nums[i] - nums[i - 2] > k) {
            // If not, return an empty array as it's not possible to meet the criteria.
            return [];
        }

        // Step 5: Push the current subarray into the result array.
        result.push([nums[i - 2], nums[i - 1], nums[i]]);
    }

    // Step 6: Return the final result array containing subarrays meeting the criteria.
    return result;
};

// Example usage:
const nums = [1, 3, 5, 7, 9, 11, 13];
const k = 4;
const result = divideArray(nums, k);
console.log(result);