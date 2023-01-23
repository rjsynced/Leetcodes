/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

nums = [2, 7, 11, 15]
target = 9

nums2 = [1, 2, 4, 7, 15]
target2 = 11

// hashmap
function twoSum(nums, target) {
    let map = new Map();
    for (let i = 0; i < nums.length; i++) {
        if (map.has(target - nums[i])) {
            return [map.get(target - nums[i]), i + 1];
        } else {
            map.set(nums[i], i + 1);
        }
    }
    return [];
};
console.log(twoSum(nums, target))

// two pointer with ternary condition
function twoSum2(nums2, target2) {
    let start = 0;
    let end = nums2.length - 1;

    while (start <= end) { // works because input array is sorted
        if (nums2[start] + nums2[end] === target2) {
            return [start + 1, end + 1]
        } else {
            (nums2[start] + nums2[end] > target2) ? end-- : start++
        }
    }
    return []
};
console.log(twoSum2(nums2, target2))