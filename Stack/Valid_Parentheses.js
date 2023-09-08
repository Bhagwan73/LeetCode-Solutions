/**
 * Problem: Valid Parentheses (LeetCode #20)
 * 
 * Problem Description:
 * Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine 
 * if the input string is valid. An input string is valid if:
 * 
 * 1. Open brackets must be closed by the same type of brackets.
 * 2. Open brackets must be closed in the correct order.
 * 
 * Example:
 * 
 * Input: s = "{[]}"
 * Output: true
 * Explanation: The input string is valid because it follows the rules for balanced parentheses.
 */

const isMatch = (a, b) => {
    return (a == "{" && b == "}") || (a == "[" && b == "]") || (a == "(" && b == ")")
}
var isValid = function (s) {
    let stack = []
    for (let i = 0; i < s.length; i++) {
        if (s[i] == "{" || s[i] == "[" || s[i] == "(") stack.push(s[i])
        else if (stack.length == 0) return false
        else if (!isMatch(stack[stack.length - 1], s[i])) return false
        else stack.pop()
    }
    return stack.length == 0
};