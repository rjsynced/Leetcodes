/**
 * @param {number[]} nums
 * @return {number}
 */

nums = [1,2,3,1,1,3]
// brute force function
// time O(n^2) space O(1)
function goodPairs(nums) {
    let count = 0
    for(let i = 0; i < nums.length; i++) {
        for(let j = i+1; j < nums.length; j++) {
            if(nums[i] == nums[j]) {
                count++
            }
        } 
    }
    return count
};
console.log(goodPairs(nums))

// time O(n) space O(n)
function goodPairs1(nums) {
    let map = {}
    let count = 0
    for(const number of nums) {
        if(map[number]) {
            count += map[number];
            map[number] +=1
        } else {
            map[number] = 1
        }
    }
    return count
};
console.log(goodPairs1(nums))

function goodPairs2(nums) {
    const map = new Map()
    let count = 0
    for(let i = 0; i < nums.length; i++) {
        if(map.has(nums[i])) {
            count += map.get(nums[i]);
            map.set(nums[i], map.get(nums[i]) + 1);
        } else {
            map.set(nums[i], 1);
        }
    }
    return count
}
console.log(goodPairs2(nums))