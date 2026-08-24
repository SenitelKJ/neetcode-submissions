class Solution:
    def groupAnagrams(self, strs: List[str]) -> List[List[str]]:  

        output = defaultdict(list)
        for string in strs:
            output["".join(sorted(string))].append("".join(string))
        return list(output.values())


        