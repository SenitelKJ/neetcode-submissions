class Solution:
    def groupAnagrams(self, strs: List[str]) -> List[List[str]]:

        anagram = {}

        for string in strs:
            sorted_string = "".join(sorted(string)) # Sort and join each string.
            print(sorted_string)
            if sorted_string in anagram: # If already saw sorted string as a key, add the unsorted to element array.
                anagram[sorted_string].append(string)
            else:
                anagram[sorted_string] = [string] # If has not seen, create new sorted and first elemenet in array.
            
        print(anagram)
        
        return list(anagram.values()) # clean for list, and extract only values (no keys)
            
        # Time Complexity: O(n log n) -> Due to Python's sorted function (Timsort)