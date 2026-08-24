class Solution:
    def twoSum(self, nums: List[int], target: int) -> List[int]:

        # Loop through nums array and check for the inverse of "target"
        # for each element. If a corresponding pair exists, return the indexs.
        
        # Data structure.
        # Loop through nums array and check the inverse of target.
        # If the inverse exists, return the the inverse index and the current index.
        # Otherwise if it doesn't keep, add seen to the data structure.

        # Key: Inverse, Value: Index
        seen = {}

        for i, e in enumerate(nums):
            inverse = target - e
            if inverse in seen:
                return [seen[inverse], i]
            seen[e] = i

        print(seen)
            