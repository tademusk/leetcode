class Solution:
    def merge(self, intervals: List[List[int]]) -> List[List[int]]:
        if len(intervals) <= 1:
            return intervals
        intervals = sorted(intervals)
        newInterval = intervals[0]
        result = []
        result.append(newInterval)

        for interval in intervals:
            if interval[0] <= newInterval[1]:
                newInterval[1] = max(newInterval[1], interval[1])
            else :
                newInterval = interval
                result.append(newInterval)
        return result
                
