class Solution:
    def topKFrequent(self, nums: List[int], k: int) -> List[int]:
        # I want to store the integer, and its frequency in a hashmap.
        count = Counter(nums).most_common(k)
        output = []
        for i in count:
            output.append(int(i[0]))
        return output

            



