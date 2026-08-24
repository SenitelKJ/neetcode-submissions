class Solution:
    def isAnagram(self, s: str, t: str) -> bool:

        if len(s) != len(t):
            return False
        
        anagram = {}

        for char in s:
            if char in anagram:
                anagram[char] += 1
            else:
                anagram[char] = 1

        for char in t:
            if char not in anagram or anagram[char] == 0:
                return False
            else:
                anagram[char] -= 1

        return True

        # O(n) -> Loops through once per char and checks whether it's been see in either string. 