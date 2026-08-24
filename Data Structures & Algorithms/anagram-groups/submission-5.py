class Solution:
    def groupAnagrams(self, strs: List[str]) -> List[List[str]]:
        
        # Can I Loop Through and Sort them First?
        # Anagrams have the same characters when sorted - that's correct. 
        groups = defaultdict(list)

        for word in strs:
            key = ''.join(sorted(word))
            groups[key].append(word)
            print(list(groups.values()))

        return (list(groups.values()))
