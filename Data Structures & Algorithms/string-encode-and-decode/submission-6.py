class Solution:

    def encode(self, strs: List[str]) -> str:

        output = ""
        # For each string, prefix it with its length and a tag, then append it to the output array.
        for string in strs:
            output += (str(len(string)) + "#" + string)
        return output


    def decode(self, s: str) -> List[str]:
        
        output = []
        i = 0

        while i < len(s):
            j = i
            while s[j] != '#':
                j+=1

            length = int(s[i:j])

            start_index = j + 1
            end_index = start_index + length
            word = s[start_index:end_index]

            output.append(word)

            i = end_index

        return output
                
