/**
 * Problem: Longest Substring Without Repeating Characters (LeetCode #3)
 * 
 * Problem Description:
 * Given a string s, find the length of the longest substring without repeating characters.
 * 
 * Example:
 * 
 * Input: "abcabcbb"
 * Output: 3
 * Explanation: The longest substring without repeating characters is "abc," which has a length of 3.
 */


var lengthOfLongestSubstring = function (s) {
    let [start, end, max] = [0, 0, 0]
    let set = new Set()
    while (end < s.length) {
        while (set.has(s[end])) {
            set.delete(s[start])
            start++
        }
        set.add(s[end])
        max = Math.max(max, end - start + 1)
        end++
    }
    return max
};