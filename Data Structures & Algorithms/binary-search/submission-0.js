class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number}
     */
    search(nums, target) {
        
        // Requires Two-Pointers. 
        // Moving midpoints either left or right.
        let leftPointer = 0
        let rightPointer = nums.length-1

        while (leftPointer <= rightPointer) {
            let midpoint = Math.floor((leftPointer + rightPointer) / 2)
            console.log(`Left: ${leftPointer}, Mid: ${midpoint}, Right: ${rightPointer}`);

            // FOUND
            if (nums[midpoint] === target) {
                return midpoint
            }

            // MOVE RIGHTPOINTER LEFT
            if (nums[midpoint] > target ) {
                rightPointer = midpoint - 1

            } else {
                // MOVE LEFTPOINTER RIGHT
                leftPointer = midpoint + 1
            }

        }

        return -1

    }
}
