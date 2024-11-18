class Solution:
    def minWindow(self, s: str, t: str) -> str:
        # 2 maps to keep track of count of t window and sliding window
        t_map, w_map = {}, {}
        # fill the t_map // the t window
        for char in t:
            t_map[char] = 1 + t_map.get(char, 0)
        #size of t window, minimum substringsleft and right, size of the minimum substring and the left pointer
        t_map_size, sub, m_size, left = len(t_map), [-1, -1], float("infinity"), 0
        w_map_size = 0
        # the main loop
        for right in range(len(s)):
            if s[right] in t_map: 
                w_map[s[right]] = 1 + w_map.get(s[right], 0)
                if w_map[s[right]] == t_map[s[right]]:
                    w_map_size += 1
            while t_map_size == w_map_size:
                if (right - left + 1) < m_size:
                    sub, m_size = [left, right], right - left + 1
                if s[left] in w_map:
                    w_map[s[left]] = w_map[s[left]] - 1
                    if w_map[s[left]] < t_map[s[left]]:
                        w_map_size -= 1
                left += 1
        l,r = sub
        return m_size != float("infinity") and "" or s[l : r+1]


        
        

        
        
