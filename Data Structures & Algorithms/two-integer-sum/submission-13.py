class Solution:
    def twoSum(self, nums: List[int], target: int) -> List[int]:
        seen_integers = {}
        
        for i, e in enumerate(nums):
            diff = target - e
            if diff in seen_integers:
                print(seen_integers)
                return [seen_integers[diff], i]
            seen_integers[e] = i
            print(seen_integers)
        