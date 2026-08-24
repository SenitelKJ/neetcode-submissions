class Solution:
    def isAnagram(self, s: str, t: str) -> bool:

        anagram = {}

        if len(s) != len(t):
            return False

        for i in s:
            if i in anagram:
                anagram[i] += 1
            else:
                anagram[i] = 1

        for i in t:
            if i in anagram and anagram[i] != 0:
                anagram[i] -= 1
            else:
                return False

        print(anagram)
        return True