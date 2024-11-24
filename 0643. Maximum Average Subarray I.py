class Solution:
    def findMaxAverage(self, nums: List[int], k: int) -> float:
        left = right = avi = max_avi = 0
        n = len(nums)
        avi =  sum(nums[:k])
        max_avi = avi
        right = k
        while right < n:
            avi = avi + nums[right] - nums[left]
            max_avi = max(max_avi, avi)
            left, right = left+1, right+1
        return max_avi / k
