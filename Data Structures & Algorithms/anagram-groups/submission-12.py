class Solution:
    def groupAnagrams(self, strs: List[str]) -> List[List[str]]:

        # Group all Anagrams into a Sublist. Use the sorted string
        # As a key for the strings with the exact same characters.
        anagrams = defaultdict(list) # Default dict to list.
        for word in strs:
            key = ''.join(sorted(word)) # Format String
            anagrams[key].append(word) # If key exists, add value.
        return list(anagrams.values())



        