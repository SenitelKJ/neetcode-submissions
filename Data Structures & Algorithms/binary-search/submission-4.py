class Solution:
    def search(self, nums: List[int], target: int) -> int:

        # Implement a two-pointer + midpoint solution (slide the pointers accordingly)

        # Pointers to Index 
        left = 0
        right = len(nums)-1
        result = -1

        while left <= right:
            midpoint = int((left+right)/2)
            if nums[midpoint] == target:
                result = midpoint 
                return result 
            if nums[midpoint] > target:
                right = midpoint - 1
            else: 
                left = midpoint + 1

        return result 

    
        