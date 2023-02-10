class Solution:
    def mostWordsFound(self, sentences: list[str]) -> int:
        maxSpaces = 0
        for i in sentences:
            maxSpaces = max(maxSpaces, i.count(" ") + 1)
        return maxSpaces

test1 = Solution()
print(test1.mostWordsFound(["alice and bob love leetcode", "i think so too", "this is great thanks very much"]))