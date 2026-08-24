class Solution:
    def twoSum(self, nums: List[int], target: int) -> List[int]:

        output = defaultdict(list)


        for index, element in enumerate(nums):
            print(element)
            diff = target - element
            if diff in output:
                return [output[diff], index]

            output[element] = index


        