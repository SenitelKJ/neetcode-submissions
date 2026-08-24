class Solution:
    def topKFrequent(self, nums: List[int], k: int) -> List[int]:

        #Use Counter() inbult method + most_common

        output = []
        nums = Counter(nums).most_common(k)
        for i in nums:
            output.append(i[0])

        print(output)
        return output
