class Solution:
    def minSubArrayLen(self, target: int, nums: List[int]) -> int:
        left = 0
        total = 0
        min_window = float('inf')
        for right in range(len(nums)):
            total += nums[right]
            if total >= target:
                min_window = min(min_window, right - left + 1 )
            while left <= right and total >= target:
                total = total - nums[left]
                left += 1
                if total >= target:
                    min_window = min(min_window, right - left + 1)
        return 0 if min_window == float('inf') else min_window
        
                 
 

        


        
