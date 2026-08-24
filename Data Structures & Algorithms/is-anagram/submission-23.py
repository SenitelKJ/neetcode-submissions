class Solution:
    def isAnagram(self, s: str, t: str) -> bool:

        s_anagram = {}
        t_anagram = {}

        for char in s:
            if char in s_anagram:
                s_anagram[char] += 1
            else:
                s_anagram[char] = 1

        for char in t:
            if char in t_anagram:
                t_anagram[char] += 1
            else:
                t_anagram[char] = 1

        return s_anagram == t_anagram


