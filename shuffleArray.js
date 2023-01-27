/**
 * @param {number[]} nums
 * @param {number} n
 * @return {number[]}
 */

nums = [2,5,1,3,4,7]
n = 3
// brute for method
function shuffle(nums, n){
    let left = []
    let right = []
    let result = []
    for(let i = 0; i < n; i++){
        left.push(nums[i])
    }
    for(let j = n; j < nums.length; j++) {
        right.push(nums[j])
    }
    let count = 0
    while(result.length != nums.length) {
        result.push(left[count])
        result.push(right[count])
        count++
    }
    return result
};
console.log(shuffle(nums, n))

function shuffle1(nums, n) {
    let result = []
    for(let i = 0; i < n; i++) {
        result.push(nums[i]) // one-liner could be result.push(nums[i], nums[i+n])
        result.push(nums[i+n])
    }
    return result
};
console.log(shuffle1(nums, n))