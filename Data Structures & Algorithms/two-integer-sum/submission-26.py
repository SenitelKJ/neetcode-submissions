class Solution:
    def twoSum(self, nums: List[int], target: int) -> List[int]:

        # Loop and retreive elements from nums.
        # Check index against Target for required inverse.
        # Check if inverse exists in nums.
        # If found, return current index and index of inverse.
        # Otherwise keep looping until pair is found (guaranteed).
        seen = {}

        for i, e in enumerate(nums):
            inverse = target - e
            # If inverse in seen:
            if inverse in seen:
                return [seen[inverse], i]
                # return indexes
            seen[e] = i
            # otherwise key/value pair to seen


        