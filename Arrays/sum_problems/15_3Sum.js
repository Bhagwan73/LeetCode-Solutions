/**
 * Problem: 3Sum (LeetCode #15)
 * 
 * Problem Description:
 * Given an integer array nums, return all the unique triplets in the array which gives the sum of zero.
 * 
 * Example:
 * 
 * Input: nums = [-1,0,1,2,-1,-4]
 * Output: [[-1,-1,2],[-1,0,1]]
 * Explanation: The unique triplets that sum to zero are [-1,-1,2] and [-1,0,1].
 */

var threeSum = function (nums) {
    nums = nums.sort((a, b) => a - b)
    let result = []
    for (let i = 0; i < nums.length - 2; i++) {
        if (i > 0 && nums[i] == nums[i - 1]) continue;
        let start = i + 1
        let end = nums.length - 1
        while (start < end) {
            let sum = nums[i] + nums[start] + nums[end]
            if (sum == 0) {
                result.push([nums[i], nums[start], nums[end]])
                while (nums[start] == nums[start + 1]) start++; // remove dublicates
                while (nums[end] == nums[end - 1]) end--;  // remove dublicates
                start++
                end--
            } else if (sum > 0) end--
            else start++
        }
    }
    return result
}