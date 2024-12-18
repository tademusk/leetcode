class Solution:
    def longestOnes(self, nums: List[int], k: int) -> int:
        left = max_window = 0
        for right, num in enumerate(nums):
            k -= 1 - num
            
            if k < 0:
                k += 1 - nums[left]
                left += 1
            else:
                max_window = max(max_window, right - left + 1)

        return max_window
