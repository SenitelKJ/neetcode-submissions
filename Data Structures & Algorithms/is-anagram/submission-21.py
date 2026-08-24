class Solution:
    def isAnagram(self, s: str, t: str) -> bool:

        if len(s) != len(t):
            return False
         
        count_s, count_t = {}, {}

        for i in range(len(s)):
            char_s = s[i]
            char_t = t[i]
            if char_s in count_s:
                count_s[char_s] += 1
            else:
                count_s[char_s] = 1
            if char_t in count_t:
                count_t[char_t] +=1 
            else:
                count_t[char_t] = 1

        print(count_s)
        print(count_t)

        return count_s == count_t







        # for char_s, char_t, in zip(s, t):
        #     count_s[char_s] = count_s.get(char_s, 0) + 1
        #     count_t[char_t] = count_t.get(char_t, 0) + 1

        # return count_s == count_t


            
        