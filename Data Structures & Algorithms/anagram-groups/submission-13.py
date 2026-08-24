class Solution:
    def groupAnagrams(self, strs: List[str]) -> List[List[str]]:

        # key = sorted word
        # values = unsorted word (append)

        output = defaultdict(list)

        for word in strs:
            key = ''.join(sorted(word))
            output[key].append(word)
        return list(output.values())


            
