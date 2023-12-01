class Solution:
    def shuffle(self, nums: List[int], n: int) -> List[int]:
        new = []
        for y in range(n):
            new.append(nums[y])
            new.append(nums[n+y])
        return new
