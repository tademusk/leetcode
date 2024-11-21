class Solution:
    def reverseWords(self, s: str) -> str:
        y = s.split()
        y.reverse()
        return " ".join(y)
