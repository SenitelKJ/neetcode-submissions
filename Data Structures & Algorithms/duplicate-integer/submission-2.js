class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {

        const setSums = new Set(nums) 

        // SETS IN JS USE .SIZE, not .LENGTH
        if (setSums.size !== nums.length) {
            console.log(setSums.length)
            console.log(nums.length)
            return true
        } else {
            return false
        }
    }
}
