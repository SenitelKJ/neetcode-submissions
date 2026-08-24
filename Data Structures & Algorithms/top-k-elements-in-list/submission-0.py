class Solution:
    def topKFrequent(self, nums: List[int], k: int) -> List[int]:

        # Return K most frequent elements in a list. 
        # How do I find the most freqeunt elements? Hash Map + Key

        freq_counter = Counter(nums)
        most_common = freq_counter.most_common(k)
        print(most_common)

        output = []

        for i in most_common:
            output.append(i[0])
        print(output)
        return output