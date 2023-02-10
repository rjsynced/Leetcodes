nums = [2,7,11,15]
target = 9

# one pass solution
def twoSum(nums, target):
    hashmap = {}

    for i, n in enumerate(nums):
        diff = target - n # 9 - 2 = 7, is 7 already in the hashmap?
        if diff in hashmap:
            return [hashmap[diff], i] #if the diff is already in hashmap then return pair of index
        hashmap[n] = i #if not then update hashmap
    return

print(twoSum(nums, target))