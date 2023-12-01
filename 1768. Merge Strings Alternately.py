class Solution:
    def mergeAlternately(self, word1: str, word2: str) -> str:
        result = ""
        extra = ""

        if len(word1) < len(word2):
            extra = word2[len(word1):]
        elif len(word2) < len(word1):
            extra = word1[len(word2):] 

        for x in range(min(len(word1),len(word2))) :
            result = result + word1[x]
            result = result + word2[x]  
        
        result = result + extra
        return result
