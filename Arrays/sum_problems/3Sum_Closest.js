
/**
 * Problem: 3Sum Closest (LeetCode #16)
 * 
 * Problem Description:
 * Given an array nums of n integers and an integer target, find three integers in nums such 
 * that the sum is closest to target. Return the sum of the three integers. You may assume 
 * that each input would have exactly one solution.
 * 
 * Example:
 * 
 * Input: nums = [-1,2,1,-4], target = 1
 * Output: 2
 * Explanation: The sum closest to the target is 2, which is the sum of [-1,2,1].
 */

var threeSumClosest = function (nums, target) {
    let min = Infinity;
    nums = nums.sort((a, b) => a - b)
    for (let i = 0; i < nums.length; i++) {
        let start = i + 1
        let end = nums.length - 1
        while (start < end) {
            let sum = nums[i] + nums[start] + nums[end]
            if (sum == target) return sum
            if (Math.abs(target - sum) < Math.abs(target - min)) min = sum
            sum > target ? end-- : start++
        }
    }
    return min
};