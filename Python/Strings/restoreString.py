class Solution:
    def restoreString(self, s: str, indices: list[int]) -> str:
        result = ""
        for i in range(len(s)):
            result += s[indices.index(i)]
        return result

    def restoreString2(self, s: str, indices: list[int]) -> str:
        temp = [''] * len(s)
        i = 0
        for j in indices:
            temp[j] = s[i]
            i += 1
        return "".join(temp)



test1 = Solution()
test2 = Solution()
print(test1.restoreString("codeleet", [4,5,6,7,0,2,1,3]))
print(test2.restoreString2("codeleet", [4,5,6,7,0,2,1,3]))