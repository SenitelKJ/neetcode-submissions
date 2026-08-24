class Solution:
    def groupAnagrams(self, strs: List[str]) -> List[List[str]]:

        anagrams = {}

        for string in strs:
            sort = sorted(string)
            sort = "".join(sort)

            if sort in anagrams:
                anagrams[sort].append(string)
            else:
                anagrams[sort] = [string]

        return list(anagrams.values())