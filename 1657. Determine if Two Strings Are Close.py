class Solution:
    def closeStrings(self, word1: str, word2: str) -> bool:
        if set(word1) != set(word2):
            return False
        fre1 = {}
        fre2 = {}
        for x in word1:
            fre1[x] = 1 + fre1.get(x, 0)
        for x in word2:
            fre2[x] = 1 + fre2.get(x, 0)
        
        return sorted(fre1.values()) == sorted(fre2.values())
