class Solution:
    def twoSum(self, nums: List[int], target: int) -> List[int]:
        currentMap = {}
        for i,n in enumerate(nums):
            diff = target - n
            if diff in currentMap:
                return [currentMap[diff], i]
            currentMap[n] = i
        return

        
        
