class Solution:
    def groupAnagrams(self, strs: List[str]) -> List[List[str]]:

        anagram = defaultdict(list)

        for string in strs:
            sorted_string = ("".join(sorted(string)))

            if sorted_string in anagram:
                anagram[sorted_string].append(string)
            else:
                anagram[sorted_string] = []
                anagram[sorted_string].append(string)


        print(list(anagram.values()))
        return list(anagram.values())