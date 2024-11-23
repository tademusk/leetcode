class Solution:
    def moveZeroes(self, nums: List[int]) -> None:
        """
        Do not return anything, modify nums in-place instead.
        """
        length = len(nums)
        if length < 2:
            return
        left, right = 0 , 1
        while right < length:
            if nums[left] != 0:
                left, right = left + 1, right + 1
            else:
                if nums[right] != 0:
                    nums[left], nums[right] = nums[right], nums[left]
                    left, right = left + 1, right + 1
                else:
                    right += 1

        
