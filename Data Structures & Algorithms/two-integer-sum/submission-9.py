class Solution:
    def twoSum(self, nums: List[int], target: int) -> List[int]:
        hash_map = {}

        # i = index, n = element
        for i, n in enumerate(nums):
            difference = target - n

            if difference in hash_map:
                result = [hash_map[difference], i]

                return result
            hash_map[n] = i
            print(hash_map)
       

