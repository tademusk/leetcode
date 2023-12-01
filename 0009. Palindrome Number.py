class Solution:
    def isPalindrome(self, x: int) -> bool:
        x = str(x)
        left = 0
        right = len(x) - 1
        while left <= right:
            if  x[left] != x[right]:
                break
            else:
                left = left + 1
                right = right - 1
        else:
            return True
        return False
