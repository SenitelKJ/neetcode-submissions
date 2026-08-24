class Solution:
    def groupAnagrams(self, strs: List[str]) -> List[List[str]]:

        output = defaultdict(list)

        # key = sorted 
        # value = unsorted 

        for word in strs:
            key = ("".join(sorted(word)))
            output[key].append(word)
        
        return (list(output.values()))

        