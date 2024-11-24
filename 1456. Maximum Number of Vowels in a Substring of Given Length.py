class Solution:
    def maxVowels(self, s: str, k: int) -> int:
        vowels = set(['a','e','i','o','u'])
        n = len(s)
        count = res = 0

        for i in range(k):
            if s[i] in vowels : count += 1
        right = k 
        left = 0
        res = count
        while right < n:
            if s[left] in vowels : count -= 1
            if s[right] in vowels : count += 1
            left, right = left+1, right+1
            res = max(res, count)
        return res 
         
            
            

        
