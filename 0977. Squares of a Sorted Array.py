from collections import deque as d
class Solution:
    def sortedSquares(self, nums: List[int]) -> List[int]:
        my_deque = d([])
        left, right = 0, len(nums) - 1
        while(left <= right):
            sleft, sright = nums[left] * nums[left], nums[right] * nums[right]
            if sleft > sright:
                my_deque.appendleft(sleft)
                left = left + 1
            else:
                my_deque.appendleft(sright)
                right = right - 1
        return list(my_deque)
        
