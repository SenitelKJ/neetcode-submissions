class Solution:
    def groupAnagrams(self, strs: List[str]) -> List[List[str]]:
        
        anagram = {}        

        for string in strs:
            sort = sorted(string)
            sort = ''.join(sort)

            if sort in anagram:
                anagram[sort].append(string) # Append to Array
            else:
                anagram[sort] = [string]
        
        return list(anagram.values())
