class Solution:
    def canPlaceFlowers(self, flowerbed: List[int], n: int) -> bool:
        p = 0
        mirror = []
        for i in range(len(flowerbed)):
            if i == 0:
                if flowerbed[0] == 0 and len(flowerbed) > 1 and flowerbed[1] == 0:
                    mirror.append(1)
                    p += 1
                elif len(flowerbed) == 1:
                    if flowerbed[0] == 0:
                        p += 1
                else:
                    mirror.append(flowerbed[0])
            elif i == len(flowerbed) - 1:
                if mirror[len(flowerbed) - 2] == 0 and flowerbed[-1] == 0:
                    mirror.append(1)
                    p += 1
                else:
                    mirror.append(flowerbed[-1]) 
            else:
                if mirror[i-1] == 0 and flowerbed[i] == 0 and flowerbed[i+1] == 0:
                    mirror.append(1)
                    p += 1
                else:
                    mirror.append(flowerbed[i])
        return True if p >= n else False

        
