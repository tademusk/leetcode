class Solution:
    def lengthOfLongestSubstring(self, s: str) -> int:
        charSet = set()
        maxLen = 0
        left = 0
        right = 0
        upperBound = len(s)
        while right < upperBound:
            if s[right] in charSet:
                charSet.remove(s[left])
                left += 1
            else:
                charSet.add(s[right])
                right += 1
                maxLen = max(maxLen, len(charSet))
        return maxLen
