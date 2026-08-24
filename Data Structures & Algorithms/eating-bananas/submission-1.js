class Solution {
    /**
     * @param {number[]} piles
     * @param {number} h
     * @return {number}
     */
    minEatingSpeed(piles, h) {

        // h = Time limit.
        // Each element element in piles = number of bananas.

        // j = bananas-per-hour eating rates.
        // Find the minimum amount of bananas (k), such that I can eat all the bananas within the time limit (h).
        
        // piles = [1,4,3,2]
        // Eating rate is 2: [1, 2, 2, 1] = sum of array is the amount of total time spent eating. (6 Hours)
        // (6 < H) ~ Valid. But is it the minimum amount of bananas I can eat per hour?
        
        // Start with highest minimum eating rate from the highest amount of bananas in the pile.

        // 1st Example: Start at 4. -> 4H < 9H. 
        // 2nd Example: Start at 25. -> 4H < 9H.

        //  1. Minimize eating rate.
        //  2. Check whether total hours, exceeds 9H.
        //  3. If it does, return that eating rate.
        //  4. If it doesn't loop to step 1.

        // Reduce by the rate K by 1 and recheck whether it H < 9H.


       // 10H
        // k = 2, 6H


        // Left Bound: k = 1
        // Right Bound: 500.
        // midpoint:  (1 + 500) / 2 =

        // Iterate through the loop using k = midpoint.
        
        // right = midpoint

        // If it exceeds the time. (Previous)
        // left = midpoint 

        // left === right?
            // return k

        let left = 1  // Min Possible Speed
        let right = Math.max(...piles); // Max Possible Speed


        while (left < right) {
            let count = 0

            // K becomes midpoint (Always use Math.Floor)
            let k = Math.floor((left+right) / 2)


            for (let i = 0; i < piles.length; i++) {
                count = count + Math.ceil(piles[i] / k) 
            }
            if (count > h) {
                left = k + 1;
            } else {
                // Otherwise, try a smaller eating speed
                right = k
            }
        }
        
        return left;
    }
}
