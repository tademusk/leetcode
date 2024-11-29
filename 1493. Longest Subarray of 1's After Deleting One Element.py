class Solution:
    def longestSubarray(self, nums: List[int]) -> int:
        deleted = left = max_window = 0
        for right, num in enumerate(nums):
            deleted += 1 - num
            
            if deleted > 1:
                deleted -= 1 - nums[left]
                left += 1

            if deleted <= 1:
                max_window = max(max_window, right - left + 1)
            
        return max_window - 1
                
            
            


        
