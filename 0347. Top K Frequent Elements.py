class Solution:
    def topKFrequent(self, nums: List[int], k: int) -> List[int]:
        counter = {}
        bucket = [[] for i in range(len(nums) + 1)]
        #filling the map
        for val in nums:
            counter[val] =  1 + counter.get(val, 0)
        # filling the bucket
        for n, i in counter.items():
            bucket[i].append(n)
        
        result = []
        for n in range(len(bucket) - 1, 0, -1):
            for i in bucket[n]:
                result.append(i)
                if len(result) == k:
                    return result
        return 
        
        
