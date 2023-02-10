nums = [1,2,3,4,4]

def containsDuplication(nums): #python is indent sensitive
    hashset = set()

    for n in nums: #for loop
        if n in hashset: #if condition
            return True
        hashset.add(n)
    return False


print(containsDuplication(nums))