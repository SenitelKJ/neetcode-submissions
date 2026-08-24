class Solution:
    def twoSum(self, nums: List[int], target: int) -> List[int]:
        
        seen = {}

        for index, element in enumerate(nums):
            inverse = target - element
            if inverse in seen:
                return [seen[inverse], index]
            seen[element] = index
        