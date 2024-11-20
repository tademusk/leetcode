class Solution:
    def kidsWithCandies(self, candies: List[int], extraCandies: int) -> List[bool]:
        max_candies = max(candies)
        result = []
        for i in candies:
            result.append(True if i + extraCandies >= max_candies else False)
        return result
        
             

        

        
