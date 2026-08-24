class Solution:
    def maxProfit(self, prices: List[int]) -> int:

        # Begin loop through each index (X).

        min_price = float('inf')
        max_profit = 0;

        for i in prices:
            if i < min_price:
                min_price = i
            
            profit = i - min_price

            if profit > max_profit:
                max_profit = profit
        
        print(max_profit)
        return max_profit

        