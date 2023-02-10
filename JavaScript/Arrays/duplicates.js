/**
 * @param {number[]} nums
 * @return {boolean}
 */

// test cases
nums1 = [1,2,3,1]
nums2 = [1,2,3,4]
nums3 = [1,1,1,3,3,4,3,2,4,2]

function containsDuplication(nums) {
    let set = new Set();
    for (let x of nums) {
		// short circuits the loop at the first instance of a duplicate
        if (set.has(x)) {
            return true;
        }
        set.add(x);
    }
    return false;
};

console.log(containsDuplication(nums1));
console.log(containsDuplication(nums2));
console.log(containsDuplication(nums3));

// another solution
function containsDuplication2(nums) {
    const s = new Set(nums); 
    return s.size !== nums.length
}

console.log(containsDuplication2(nums1));
console.log(containsDuplication2(nums2));
console.log(containsDuplication2(nums3));