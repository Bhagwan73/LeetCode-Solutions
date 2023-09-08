/**
 * Problem: Baseball Game (LeetCode #682)
 * 
 * Problem Description:
 * You are keeping score for a baseball game with strange rules. The game consists of several 
 * rounds, where the scores of past rounds may affect future rounds' scores.
 * 
 * At the beginning of the game, you start with an empty record. You are given a list of strings 
 * ops, where ops[i] is the ith operation you must apply to the record and is one of the following:
 * 
 * 1. An integer x - Record a new score of x.
 * 2. "+" - Record a new score that is the sum of the previous two scores. It is guaranteed there 
 *    will always be two previous scores.
 * 3. "D" - Record a new score that is double the previous score. It is guaranteed there will 
 *    always be a previous score.
 * 4. "C" - Invalidate the previous score, removing it from the record. It is guaranteed there 
 *    will always be a previous score.
 * 
 * Return the sum of all the scores on the record.
 * 
 * Example:
 * 
 * Input: ops = ["5","2","C","D","+"]
 * Output: 30
 * Explanation: 
 * Round 1: You could record 5.
 * Round 2: You could record 2.
 * Operation 1: The round 2's data was invalid. The record is [5].
 * Round 3: You could record 10, the sum of the round 1 and round 2.
 * Round 4: You could record 5 * 2 = 10.
 * Total sum is 5 + 10 + 10 = 25.
 */

var calPoints = function(operations) {
    let stack=[]
    let sum=0
    for(let i=0;i<operations.length;i++){
        let num=parseInt(operations[i])
        if(num) {
            stack.push(num) 
            sum+=num
        }
        else if(operations[i]=="C") {
            sum-=stack[stack.length-1]
            stack.pop()
        }
        else if(operations[i]=="D") {
            stack.push(stack[stack.length-1]*2)
            sum+=stack[stack.length-1]
        }
        else if(operations[i]=="+" && stack.length>=2){
            stack.push(stack[stack.length-1]+stack[stack.length-2])
            sum+=stack[stack.length-1]
        }
    }
    return sum
};