class Solution:
    def isSubsequence(self, s: str, t: str) -> bool:
        len_of_s = len(s)
        len_of_t = len(t)
        if len_of_s > len_of_t:
            return False
        l = r = 0
        while l < len_of_s:
            while r < len_of_t and s[l] != t[r]:
                r += 1
            if r == len_of_t:
                break
            l += 1
            r += 1
        return True if l == len_of_s else False
        

        
        
