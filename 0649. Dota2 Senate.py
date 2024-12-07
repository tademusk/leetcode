class Solution:
    def predictPartyVictory(self, senate: str) -> str:
        senate = list(senate)
        size = len(senate)
        R , D = deque(), deque()
        
        for i, c in enumerate(senate):
            if c == "R":
                R.append(i)
            else:
                D.append(i)

        while D and R:
            r, d = R.popleft(), D.popleft()
            if r < d:
                R.append(size +  r)
            else :
                D.append(size +  d)

        return "Radiant" if R else "Dire"
        

                

        
            
        
