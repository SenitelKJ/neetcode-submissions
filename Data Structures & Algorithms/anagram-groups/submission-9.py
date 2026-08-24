class Solution:
    def groupAnagrams(self, strs: List[str]) -> List[List[str]]:

        # Group all Anagrams into a Sublist. Use the sorted string
        # As a key for the strings with the exact same characters.
        anagrams = {}

        for i in strs:
            key = ''.join(sorted(i)) # Format String
            if key in anagrams:
                anagrams[key].append(i) # If key exists, add value.
            else:
                anagrams[key] = [] # Create a key + add value.
                anagrams[key].append(i)

        result = list(anagrams.values()) # Converts dict values into list.
        return result 



        