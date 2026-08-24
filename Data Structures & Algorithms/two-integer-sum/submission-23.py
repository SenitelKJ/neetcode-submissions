class Solution:
    def twoSum(self, nums: List[int], target: int) -> List[int]:
        hash_map = defaultdict(list)

        for i, e in enumerate(nums):
            check = target - e
            if check in hash_map:
                print(hash_map[check])
                return [hash_map[check], i]
            hash_map[e] = i