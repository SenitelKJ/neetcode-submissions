class Solution:
    def twoSum(self, nums: List[int], target: int) -> List[int]:
        
        seen = {}

        for index, element in enumerate(nums):
            required_element = target - element

            if required_element in seen:
                return [seen[required_element], index]
            else:
                seen[element] = index
        