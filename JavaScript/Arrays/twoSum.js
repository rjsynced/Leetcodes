/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

nums = [2, 7, 11, 14]
target = 13
// brute force function
function twoSum(nums, target) {
    for(let i = 0; i < nums.length; i++) {
        for(let j = i + 1; j < nums.length; j++) {
            if(nums[i] + nums[j] == target) {
                return [i, j]
            }
        }
    }
};
console.log(twoSum(nums, target));


// O(n) time complexity
function twoSumMap(nums, target) {
    let map = new Map();
    for(let i = 0; i < nums.length; i ++) {
        if(map.has(target - nums[i])) {
            return [map.get(target - nums[i]), i];
        } else {
            map.set(nums[i], i);
        }
    }
	return map
}
console.log(twoSumMap(nums, target));