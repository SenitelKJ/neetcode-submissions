class Solution:
    def hasDuplicate(self, nums: List[int]) -> bool:
        
        #len removes all duplicates in the array.
        result = len(nums) != len(set(nums))
        print(result)
        
        return result
         