class Solution:
    def asteroidCollision(self, asteroids: List[int]) -> List[int]:
        res = []
        for astroid in asteroids:
            while res and astroid < 0 and res[-1] > 0:
                if astroid + res[-1] > 0:
                    astroid = 0
                elif astroid + res[-1] < 0:
                    res.pop()
                else :
                    res.pop()
                    astroid = 0
            if astroid:
                res.append(astroid)
        return res
                

                

        
