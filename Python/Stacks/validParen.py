class Solution:
    def isValid(self, s: str) -> bool:
        result = []
        pairs = {
            "(" : ")",
            "{" : "}",
            "[" : "]"
        }
        if len(s) % 2: return False

        for i in s:
            if i in pairs:
                result.append(i)
            elif len(result) == 0 or pairs[result.pop()] != i:
                return False
        return len(result) == 0
        
test1 = Solution()
print(test1.isValid("(){}]"))