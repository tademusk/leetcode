class Solution:
    def longestValidParentheses(self, s: str) -> int:
        size = len(s)
        open = close = longest = 0
        for i in range(size):
            if s[i] == "(":
                open += 1
            else:
                close += 1

            if close == open:
                longest = max(longest, 2 * close)
            elif close > open:
                close = open = 0

        open = close = 0       
        for i in range(size -1, -1, -1):
            if s[i] == "(":
                open += 1
            else:
                close += 1

            if close == open:
                longest = max(longest, 2 * close)
            elif close < open:
                close = open = 0

        return longest



        
