class Solution:
    def twoSum(self, nums: List[int], target: int) -> List[int]:
        output = defaultdict(list)

        for integer, element in enumerate(nums):
            diff = target - element
            if diff in output:
                return [output[diff], integer]
            output[element] = integer
            