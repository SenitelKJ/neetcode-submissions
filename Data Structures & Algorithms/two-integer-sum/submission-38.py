class Solution:
    def twoSum(self, nums: List[int], target: int) -> List[int]:

        seen = {}
        
        for index, element in enumerate(nums):
            check = target - element
            if check in seen:
                return [seen[check], index]
            else:
                seen[element] = index
            
        