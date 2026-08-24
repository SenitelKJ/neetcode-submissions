class Solution:
    def minEatingSpeed(self, piles: List[int], h: int) -> int:
        # Largest pile of bananas
        left = 1 # Min Speed
        right = max(piles)
        
        while left < right:
            count = 0
            # K becomes midpoint
        
            k = math.floor((left+right)/2)

            for bananas in piles:
                count = count + math.ceil(bananas / k)
            
            if count > h:
                left = k + 1
            else:
                right = k

        return int(left)
        
        
