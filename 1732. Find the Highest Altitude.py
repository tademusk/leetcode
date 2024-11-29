class Solution:
    def largestAltitude(self, gain: List[int]) -> int:
        res = 0
        total = 0
        for x in gain:
            total += x
            res = max(res, total)
        return res
