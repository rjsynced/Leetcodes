/**
 * @param {number[]} nums
 * @return {number[]}
 */

nums = [1,1,1,1,1]

// 1 -- 2 + 1 -- 3 + 3 -- 4 + 6
// 1 --   3   --   6   --   10
// need 1, 3, 6, 10

function runningSum(nums) {
    for(let i=1;i<nums.length;i++){
        nums[i]+=nums[i-1]
    }
    return nums
};
console.log(runningSum(nums))