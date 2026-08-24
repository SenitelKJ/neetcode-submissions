class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {

        // // Sliding Window Problem. But On^2 Complexity: Improvements?
        // let maxProfit = 0

        // for (let i = 0; i < prices.length; i++) {
        //     for (let j = i+1; j < prices.length; j++) {
        //         let profit = prices[j] - prices[i]
        //         if (maxProfit < profit) {
        //             maxProfit = profit
        //         }

        //     }
        // }

        // console.log(maxProfit)
        // return maxProfit


        let minPrice = Infinity;
        let maxProfit = 0;

        for (let i = 0; i < prices.length; i++) {
            if (prices[i] < minPrice) {
                minPrice = prices[i]
            }

            let profit = prices[i] - minPrice;

            if (profit > maxProfit) {
                maxProfit = profit 
            }
        }

        console.log(maxProfit)
        return maxProfit
    }
}
