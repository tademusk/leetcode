class Solution:
    def minimumCost(self, source: str, target: str, original: List[str], changed: List[str], cost: List[int]) -> int:
        if source == target:
            return 0
        
        INF = 10**9
        dist = [[INF] * 26 for _ in range(26)]
        
        for i in range(26):
            dist[i][i] = 0
        
        for o, c, co in zip(original, changed, cost):
            u = ord(o) - ord('a')
            v = ord(c) - ord('a')
            dist[u][v] = min(dist[u][v], co)
        
        for k in range(26):
            for i in range(26):
                if dist[i][k] < INF:
                    for j in range(26):
                        if dist[k][j] < INF:
                            dist[i][j] = min(dist[i][j], dist[i][k] + dist[k][j])
        
        total = 0
        for s_char, t_char in zip(source, target):
            if s_char == t_char:
                continue
            
            u = ord(s_char) - ord('a')
            v = ord(t_char) - ord('a')
            
            if dist[u][v] >= INF:
                return -1
            
            total += dist[u][v]
        
        return total