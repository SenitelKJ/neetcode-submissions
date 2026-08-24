class Solution:
    def twoSum(self, nums: List[int], target: int) -> List[int]:
        
        # Create a dictionary data structure for seen indices.
        seen = {}

        # Loop through for a list of tuples (index and element) for each iterable.
        for index, element in enumerate(nums):
            print(seen)            
            # If "check exists"... in the seen dictionaryh, return the index of that and the current index.
            check = target - nums[index]
            if check in seen:
                print(seen)            
                return [seen[check], index]
            else:
                # Otherwise, store the index as the key, with the value as the element (seen[value] = key?)
                seen[element] = index

        # Time Complexity: O(N)? Time grows proportionate to input as a integer is added to nums.
