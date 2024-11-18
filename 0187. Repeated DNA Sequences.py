class Solution:
    def findRepeatedDnaSequences(self, s: str) -> List[str]:
        frequency_map = {}
        left, right = 0, 10
        output = []
        while right <= len(s):
            word = s[left: right]
            frequency_map[word] = 1 + frequency_map.get(word, 0)
            if frequency_map[word] == 2:
                output.append(word)
            left , right = left+1, right+1
        return output


        
        
