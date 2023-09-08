/**
 * Problem: Contains Duplicate (LeetCode #217)
 * 
 * Problem Description:
 * Given an integer array nums, return true if any value appears at least twice in the array, 
 * and return false if every element is distinct.
 * 
 * Example:
 * 
 * Input: [1,2,3,1]
 * Output: true
 * Explanation: The array contains duplicate values (1 appears twice).
 */


var containsDuplicate = function(nums) {
    let set=new Set(nums)
    return set.size < nums.length
};