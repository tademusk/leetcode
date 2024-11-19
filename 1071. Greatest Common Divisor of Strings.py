class Solution:
    def gcdOfStrings(self, str1: str, str2: str) -> str:
        len_1, len_2 = len(str1), len(str2)
        small_str = str1 if len(str1) <= len(str2) else str2
        min_len = len(small_str)

        for l in range(min_len, 0, -1):
            if len_1 % l or len_2 % l:
                continue
            f1, f2 = len_1 // l ,  len_2 // l
            if f1 * small_str[:l] == str1 and f2 * small_str[:l] == str2:
                return small_str[:l]
        return ""

        
         
