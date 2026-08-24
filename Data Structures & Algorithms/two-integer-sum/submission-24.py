class Solution:
    def twoSum(self, nums: List[int], target: int) -> List[int]:
    
        hash_map = defaultdict(list)
        for i, e in enumerate(nums):
            
            difference = target - e 
            print(difference)
            if difference in hash_map:
                return [hash_map[difference], i]
            hash_map[e] = i