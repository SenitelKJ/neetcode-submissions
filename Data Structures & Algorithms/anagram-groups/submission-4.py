from collections import defaultdict

class Solution:
    def groupAnagrams(self, strs: List[str]) -> List[List[str]]:

        # Group strings that are anagrams under a common key.
        groups = defaultdict(list)

        for word in strs:
            keys = ("".join(sorted(word)))
            groups[keys].append(word)
            print(keys)
        print (groups)
        result_list = (list(groups.values()))

        return result_list