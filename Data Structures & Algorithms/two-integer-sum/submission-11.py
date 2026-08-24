class Solution:
    def twoSum(self, nums: List[int], target: int) -> List[int]:
        hash_map = {}
        
        for i, e in enumerate(nums):
            diff = target - e
            if diff in hash_map:
                print([hash_map[diff],i])
                return [hash_map[diff],i]
            hash_map[e] = i

        