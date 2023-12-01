class Solution:
    def numIdenticalPairs(self, nums: List[int]) -> int:
        count = 0
        right = 1
        for num in nums:
            mySlice = nums[right :]
            for myNum in mySlice:
                if num == myNum:
                    count = count + 1
            right = right + 1        
        return count
