class Solution:
    def twoSum(self, nums: List[int], target: int) -> List[int]:

        output = {}

        for index, element in enumerate(nums):
            diff = target - element 
            if diff in output:
                return [output[diff], index]
            output[element] = index