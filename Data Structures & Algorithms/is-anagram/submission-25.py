class Solution:
    def isAnagram(self, s: str, t: str) -> bool:

        anagram = {}
        
        for char in s:
            if char in anagram:
                anagram[char] += 1
            else:
                anagram[char] = 1

        for char in t:
            if char in anagram:
                anagram[char] -= 1
            else:
                anagram[char] = 1

        print(anagram)

        return set(anagram.values()) == {0}

