/**
 * @param {number[]} nums
 * @return {number[]}
 */

nums = [0,2,1,5,3,4]

// simple for loop
function buildArray(nums) {
    let result = []
    for(let i = 0; i < nums.length; i++) {
        result.push(nums[nums[i]])
    }
    return result
};
console.log(buildArray(nums))

// 1 liner map 
function buildArray1(nums) {
    return nums.map((x) => nums[x]);
};
console.log(buildArray1(nums))