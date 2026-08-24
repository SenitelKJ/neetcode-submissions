class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number}
     */
    search(nums, target) {
        
        let left = 0
        let right = nums.length-1
        let result = -1 

        while (left <= right) {

            let midpoint = Math.floor((left+right)/2)

            if (nums[midpoint] === target) {
                result = midpoint
                return result
            } else if (nums[midpoint] < target) {
                left = midpoint + 1
            } else {
                right = midpoint - 1
            }
        }

        return result
    }
}
