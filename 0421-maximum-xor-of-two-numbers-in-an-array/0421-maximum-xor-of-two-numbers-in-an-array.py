class Solution:
    def findMaximumXOR(self, nums: List[int]) -> int:
        max_xor = 0
        mask = 0
        for bit in range(31, -1, -1):
            mask |= (1 << bit)
            prefixes = {num & mask for num in nums}
            candidate = max_xor | (1 << bit)
            if any((candidate ^ p) in prefixes for p in prefixes):
                max_xor = candidate    
        return max_xor
