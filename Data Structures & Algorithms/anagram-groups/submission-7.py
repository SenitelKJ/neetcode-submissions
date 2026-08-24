class Solution:
    def groupAnagrams(self, strs: List[str]) -> List[List[str]]:

        # Group all Anagrams into a Sublist. Use the sorted string
        # As a key for the strings with the exact same characters.
        anagrams = {}


        for i in strs:
            key = ''.join(sorted(i))
            if key in anagrams:
                anagrams[key].append(i)
            else:
                anagrams[key] = []
                anagrams[key].append(i)

        result = list(anagrams.values())
        print(result)
        return result 



        