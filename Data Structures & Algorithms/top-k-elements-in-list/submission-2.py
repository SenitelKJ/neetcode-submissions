class Solution:
    def topKFrequent(self, nums: List[int], k: int) -> List[int]:

        # Return the k most frequent elements within the array
        # hash map: key = k, value = frequency
        freq = Counter(nums).most_common(k)
        
        output = []
        for i in freq:
            output.append(i[0])
        return output
           