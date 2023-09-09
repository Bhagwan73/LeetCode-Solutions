/*
* Problem Statement
* You are given an array of positive integers arr and an integer target.
* Write a function to find all the subsets of arr that sum up to the target value.
* Each subset should be represented as an array of integers.
*/

let findSubsetsWithSum = (arr, target) => {
    let result = []
    let find = (remaining, subset, index) => {
        if (remaining == 0) {
            result.push([...subset])
            return;
        }
        if (index < arr.length ) {
            find(remaining - arr[index], subset.concat(arr[index]), index + 1)
            find(remaining, subset, index + 1)
        }
    }
    find(target, [], 0)
    return result
}

console.log(findSubsetsWithSum([12, 1, 3], 4))


