class Solution:
    def isAnagram(self, s: str, t: str) -> bool:
        
        # First attempt: Easier to Read; Not most efficient. 
        # return sorted(s) == sorted(t) # O(nlogn)
    
        check_dict = {}

        for char in s:
            if char in check_dict:
                check_dict[char] += 1
            else:
                check_dict[char] = 1

        for char in t:
            if char in check_dict:
                check_dict[char] -=  1
            else:
                check_dict[char] = 1   

        print(set(check_dict.values()))
        return set(check_dict.values()) == {0}

        # Better solution that solves in O(n) time?
        