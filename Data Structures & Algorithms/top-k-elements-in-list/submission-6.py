class Solution:
    def topKFrequent(self, nums: List[int], k: int) -> List[int]:
        output = []
        for freq in Counter(nums).most_common(k):
            output.append(freq[0])
        return output