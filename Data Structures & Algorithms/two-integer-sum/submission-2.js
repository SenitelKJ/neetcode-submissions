class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        for (let i = 0; i < nums.length; i++) {
            let y = target - nums[i]
            console.log(y)

            if (nums.indexOf(y) !== -1 && nums.indexOf(y) !== i ) {
                return [i, nums.indexOf(y)]
            }
        }
    }
}
