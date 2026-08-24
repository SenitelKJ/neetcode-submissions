class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        let setSums = new Set(nums).size
        console.log(setSums)
        console.log(nums.length)
        return setSums !== nums.length
    }
}
