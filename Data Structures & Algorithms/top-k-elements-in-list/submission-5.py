class Solution:
    def topKFrequent(self, nums: List[int], k: int) -> List[int]:

        output = []
        for array in Counter(nums).most_common(k):
            output.append(array[0])
    
        print(output)
        return output