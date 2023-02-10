/**
 * @param {number[]} nums
 * @return {number[]}
 */

// another test sync

nums = [1,2,1]
// my brute force method
function concatArray(nums) {
    let result = []
    for(let i = 0; i < nums.length; i++) {
        result.push(nums[i])
    }
    if(result.length > nums.length/2) {
        for(let j = 0; j < nums.length; j++) {
            result.push(nums[j])
        }
    }
    return result
};
console.log(concatArray(nums))

// cheesy one-liner
function concatArray1(nums) {
    return [...nums,...nums]
}
console.log(concatArray1(nums))

// O(n + n) which will go to O(n)
function concatArray2(nums) {
    nums.push(...nums)
    return nums
}
console.log(concatArray2(nums))