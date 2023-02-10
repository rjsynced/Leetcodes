

#conditions to be met
# anagrams have exactly the same amount of characters in both strings
# it is observed that if true, anagrams have the same length, if not return false

# 2 hashmaps solution
# put both strings into two seperate hashmaps and compare each key with each value
# make sure they are the same length in the beginning for edge case
# Time complexity is O(s + t)
class Solution:
    def isAnagrams(self, s: str, t: str):
        if len(s) != len(t):
            return False

        countS = {}
        countT = {}

        for i in range(len(s)):
            countS[s[i]] = 1 + countS.get(s[i], 0) # counting the occurance of each character in string s
            countT[t[i]] = 1 + countT.get(t[i], 0) # counting the occurance of each character in string t
        for c in countS:
            if countS[c] != countT.get(c, 0):
                return False

        return True
    
    # return sorted(s) == sorted(t) 

first_anagram = Solution()
second_anagram = Solution()
print(first_anagram.isAnagrams("anagram", "granaam"))
print(second_anagram.isAnagrams("car", "rat"))

