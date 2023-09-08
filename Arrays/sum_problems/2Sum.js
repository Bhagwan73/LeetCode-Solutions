/**
 * Problem: Two Sum (LeetCode #1)
 * 
 * Problem Description:
 * Given an array of integers nums and an integer target, return indices of the two numbers 
 * such that they add up to target. You may assume that each input would have exactly one 
 * solution, and you may not use the same element twice.
 * 
 * Example:
 * 
 * Input: nums = [2,7,11,15], target = 9
 * Output: [0,1]
 * Explanation: nums[0] + nums[1] = 2 + 7 = 9, so the output is [0,1].
 */

var twoSum = function (nums, target) {
    let map = new Map()
    let result = []
    for (let i = 0; i < nums.length; i++) {
        map.set(nums[i], i)
    }
    for (let i = 0; i < nums.length; i++) {
        if (map.has(target - nums[i]) && map.get(target - nums[i]) != i) {
            result.push(i, map.get(target - nums[i]))
            map.delete(nums[i])
        }
    }
    return result
};