class Solution:
    def groupAnagrams(self, strs: List[str]) -> List[List[str]]:

        # How is this different to anagram {}?

        anagram = {}

        for string in strs:
            sorted_string = ("".join(sorted(string))) # Parse strings

            if sorted_string in anagram:
                anagram[sorted_string].append(string)
            else:
                anagram[sorted_string] = []
                anagram[sorted_string].append(string)

        # Solution is O(N)?) Loops through only once and checks each string?
        return list(anagram.values())

