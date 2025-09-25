class Solution:
    def numMatchingSubseq(self, s: str, words: List[str]) -> int:
        waiting = defaultdict(list)
        for w in words:
            it = iter(w)
            waiting[next(it)].append(it) 
        count = 0
        for c in s:
            iters = waiting.pop(c, [])
            for it in iters:
                nxt = next(it, None)
                if nxt:
                    waiting[nxt].append(it)
                else:
                    count += 1 
        return count
