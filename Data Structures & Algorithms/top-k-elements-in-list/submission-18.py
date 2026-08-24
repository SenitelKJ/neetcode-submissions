class Solution:
    def topKFrequent(self, nums: List[int], k: int) -> List[int]:
        count = (Counter(nums).most_common(k)) 
        return [item[0] for item in count]
      