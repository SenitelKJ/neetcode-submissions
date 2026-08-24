class Solution:
    def longestConsecutive(self, nums: List[int]) -> int:
        
        # Must be in 0(n) constant time.

        numSet = set(nums)
        longest = 0

        for n in nums:
            # check if it the start of a sequence
            if (n-1) not in numSet:
                length = 0
                while (n + length) in numSet:
                    length += 1
                longest = max(length, longest)
        return longest 
