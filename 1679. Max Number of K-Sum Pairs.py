class Solution:
    def maxOperations(self, nums: List[int], k: int) -> int:
        nums.sort()
        left, right = 0, len(nums) - 1
        result = 0
        while left < right:
            cur_sum = nums[left] + nums [right]
            if cur_sum < k:
                left += 1
            elif cur_sum > k:
                right -= 1
            else:
                result += 1
                left += 1
                right -= 1
        return result

            


    

        
