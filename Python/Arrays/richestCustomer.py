class Solution:
    def maximumWealth(self, accounts: list[list[int]]) -> int:
        maxWealth = 0
        for i in range(len(accounts)):
            totalWealth = sum(accounts[i])
            maxWealth = max(maxWealth, totalWealth)
        return maxWealth

test1 = Solution()
print(test1.maximumWealth([[2], [3,3,3], [9,5]]))
