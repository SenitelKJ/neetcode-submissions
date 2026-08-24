class Solution:
    def isAnagram(self, s: str, t: str) -> bool:

        anagram = {}

        if len(s) != len(t):
            return False 

        for char in s:
            if char in anagram:
                anagram[char] += 1
            else:
                anagram[char] = 1
        
        for char in t:
            if char in anagram:
                anagram[char] -= 1
            else:
                return False
                    
        return all(val == 0 for val in anagram.values())
        
        # O(N) Time Complexity: Loops through at constant time; scales linearly with each addition length to s and t?