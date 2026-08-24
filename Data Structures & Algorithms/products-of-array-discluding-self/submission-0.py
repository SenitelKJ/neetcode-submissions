class Solution:
    def productExceptSelf(self, nums: List[int]) -> List[int]:

        # Generate the result array, with base 1.
        result = [1 for i in range(len(nums))]
        prefix_product = 1 

        # Start iterating through left to right.
        # Set the current element in the result array to the prefix product
        # Set the prefix product to the product of itself and current elemeent in nums.
        for i in range(len(nums)):
            result[i] = prefix_product
            prefix_product *= nums[i]
        print(result)

        suffix_product = 1 

        for i in range(len(nums)-1,-1,-1):
            result[i] *= suffix_product
            suffix_product *= nums[i]
        
        print(result)
        return result