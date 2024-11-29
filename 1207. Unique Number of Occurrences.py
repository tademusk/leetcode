class Solution:
    def uniqueOccurrences(self, arr: List[int]) -> bool:
        s = {}
        for x in arr:
            s[x] = s.get(x, 0) + 1
        y = [x for x in s.values()]
        z = set(y)
        return len(y) == len(z)

        
