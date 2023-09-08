/**
 * Problem: 4Sum (LeetCode #18)
 * 
 * Problem Description:
 * Given an array nums of n integers, return all unique quadruplets in the array which 
 * gives the sum of target.
 * 
 * Example:
 * 
 * Input: nums = [1,0,-1,0,-2,2], target = 0
 * Output: [[-2,-1,1,2],[-2,0,0,2],[-1,0,0,1]]
 * Explanation: The unique quadruplets that sum to zero are shown above.
 */

var fourSum = function (nums, target) {
    let result = []
    nums = nums.sort((a, b) => a - b)
    for (let i = 0; i < nums.length - 3; i++) {
        for (let j = i + 1; j < nums.length - 2; j++) {
            let start = j + 1
            let end = nums.length - 1
            while (start < end) {
                let sum = nums[i] + nums[j] + nums[start] + nums[end]
                if (sum == target) {
                    result.push([nums[i], nums[j], nums[start], nums[end]])
                    while (nums[start] == nums[start + 1]) start++
                    while (nums[end] == nums[end - 1]) end--
                    start++
                    end--
                } else if (sum > target) end--
                else start++
            }
            while (nums[j] == nums[j + 1]) j++;
        }
        while (nums[i] == nums[i + 1]) i++;
    }
    return result
};