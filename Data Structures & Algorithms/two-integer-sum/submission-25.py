class Solution:
    def twoSum(self, nums: List[int], target: int) -> List[int]:

        seen = {}

        for i, e in enumerate(nums):
            check = target - e
            if check in seen:
                return [seen[check], i]
            seen[e] = i
