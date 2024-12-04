class Solution:
    def isValid(self, s: str) -> bool:
        pair = {
            "]" : "[",
            "}" : "{",
            ")" : "(",
        }
        stack = []
        for char in s:
            if char in pair:
                if stack and stack.pop() == pair[char]:
                    continue
                else:
                    return False
            else:
                stack.append(char)
        return not stack



                
        
        

        
