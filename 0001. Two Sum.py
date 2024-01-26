class Solution:
    def twoSum(self, nums: List[int], target: int) -> List[int]:
       my_hash = dict()
       for i, num in enumerate(nums):
           if target - num in my_hash:
               return [my_hash[target - num], i]
           else :
               my_hash[num] = i
         
        
        
