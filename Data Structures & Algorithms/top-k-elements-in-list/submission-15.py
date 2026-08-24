class Solution:
    def topKFrequent(self, nums: List[int], k: int) -> List[int]:
        
        hash_map = defaultdict(list)
        count = (Counter(nums).most_common(k))
        return [element for element, frequency in count]
      

  