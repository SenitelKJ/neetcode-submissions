class Solution:
    def twoSum(self, nums: List[int], target: int) -> List[int]:
        array = {}

        for i, num in enumerate(nums):

            difference = target - num 
            if difference in array:
                return [array[difference], i]
            array[num] = i

