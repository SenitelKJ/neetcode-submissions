class Solution:
    def groupAnagrams(self, strs: List[str]) -> List[List[str]]:
        groups = defaultdict(list)

        # Loop through the list of strings.
        for word in strs:
            print(word)
            key = ''.join(sorted(word))
            print(key)        
            groups[key].append(word)

        print(groups)
        print(groups.values())
        print(list(groups.values()))
        return list(groups.values())