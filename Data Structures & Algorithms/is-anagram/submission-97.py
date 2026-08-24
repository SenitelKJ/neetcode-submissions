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