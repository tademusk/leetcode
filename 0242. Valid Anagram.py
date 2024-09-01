class Solution:
    def isAnagram(self, s: str, t: str) -> bool:
        if len(s) != len(t) :
            return False
        s_hash,  t_hash = {}, {}
        for val in range(len(s)):
            s_hash[s[val]] = 1 + s_hash.get(s[val], 0)
            t_hash[t[val]] = 1 + t_hash.get(t[val], 0)
        return s_hash == t_hash        
