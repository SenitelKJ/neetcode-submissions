class Solution:
    def topKFrequent(self, nums: List[int], k: int) -> List[int]:
        
        hash_map = defaultdict(list)
        count = (Counter(nums).most_common())
        result = []
        output = []

        for i in count:
            print(i[0])
            result.append(i[0])
            
        for i in range(k):
            output.append(result[i])
            print(output)

        return output

  