class Solution:
    def addOperators(self, num: str, target: int) -> List[str]:
        res = []
        
        def dfs(index, path, value, prev):
            if index == len(num):
                if value == target:
                    res.append(path)
                return
            
            for i in range(index, len(num)):
                if i > index and num[index] == '0':
                    break
                    
                s = num[index:i+1]
                n = int(s)
                
                if index == 0:
                    dfs(i+1, s, n, n)
                else:
                    dfs(i+1, path + '+' + s, value + n, n)
                    dfs(i+1, path + '-' + s, value - n, -n)
                    dfs(i+1, path + '*' + s, value - prev + prev * n, prev * n)
        
        dfs(0, "", 0, 0)
        return res
        