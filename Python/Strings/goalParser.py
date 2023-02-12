# brute force method with python
class Solution:
    def interpret(self, command: str) -> str:
        output = ""
        count = 0
        for i in command:
            if i == "G":
                output = output + "G"
            elif i == "(":
                count = count + 1
            elif i == ")" and (count == 1):
                output = output + "o"
                count = 0
            elif i == "a":
                count = count + 1
            elif i == "l":
                count = count + 1
            elif i == ")" and count == 3:
                output = output + "al"
                count = 0
        return output

    def interpret2(self, s: str) -> str:
        pairs = {
            "(al)":"al", 
            "()":"o",
            "G":"G"
        }
        temp = ""
        result = ""
        for i in range(len(s)):
            temp += s[i]
            if(temp in pairs):
                result += pairs[temp]
                temp = ""
        return result

test1 = Solution()
test2 = Solution()
print(test1.interpret("G()(al)"))
print(test2.interpret2("G()()()()(al)"))