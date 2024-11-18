class Solution:
    def mergeAlternately(self, word1: str, word2: str) -> str:

        short_word = word1 if len(word1) <= len(word2) else word2
        long_word = word1 if len(word1) >= len(word2) else word2
        loop_length = len(short_word)
        result = ""

        for i in range(loop_length):
            result += word1[i]
            result += word2[i]
        result += long_word[i+1: len(long_word)]
        return result 



        
        
        
