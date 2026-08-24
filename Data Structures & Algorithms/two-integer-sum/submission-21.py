class Solution:
    def twoSum(self, nums: List[int], target: int) -> List[int]:

        output = {}
        
        for index, element in enumerate(nums):
            difference = target - element
            if difference in output:
                print(difference, index)
                return [output[difference], index]
            output[element] = index


        