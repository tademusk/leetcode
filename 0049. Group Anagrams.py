class Solution:
    def groupAnagrams(self, strs: List[str]) -> List[List[str]]:
        store = defaultdict(list)

        for s in strs:
            s_key = [0] * 26

            for c in s:
                s_key[ord(c) - ord("a")] += 1
            store[tuple(s_key)].append(s)
        
        return store.values()
         
