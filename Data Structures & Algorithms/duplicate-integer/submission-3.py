class Solution:
    def hasDuplicate(self, nums: List[int]) -> bool:
        # Creates a SET of the numbers, removing all duplicates.
        return len(set(nums)) != len(nums)
        