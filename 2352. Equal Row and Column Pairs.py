class Solution:
    def equalPairs(self, grid: List[List[int]]) -> int:
        row_len, col_len =len(grid), len(grid[0])
        my_dict = dict()
        res = 0
        for row in grid:
            my_dict[str(row)] = 1 + my_dict.get(str(row), 0)
        for j in range(col_len):
            new_arr = []
            for i in range(row_len):
                new_arr.append(grid[i][j])
            for i in range(my_dict.get(str(new_arr),0)):
                res +=1
        return res
