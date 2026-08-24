class Solution:
    def groupAnagrams(self, strs: List[str]) -> List[List[str]]:
        anagram = {}

        for string in strs:
            sorted_string = "".join(sorted(string))
            print(sorted_string)
            if sorted_string in anagram:
                anagram[sorted_string].append(string)
            else:
                anagram[sorted_string] = [string]

        print(anagram)
        return list(anagram.values())