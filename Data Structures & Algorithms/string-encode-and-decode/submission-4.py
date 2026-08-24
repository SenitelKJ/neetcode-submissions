class Solution:

    def encode(self, strs: List[str]) -> str:
        
        join = ""
        for word in strs:
            word = str(len(word)) + "#" + word
            join = join + word
        return join

    def decode(self, s: str) -> List[str]:

        output = []
        i = 0
        while i < len(s):
            # Parse the multi-digit number
            num_str = ""
            while s[i].isdigit():
                num_str += s[i]
                i += 1

            # Skip the '#' delimiter
            i += 1

            # Get the number of characters to read
            length = int(num_str)

            # Extract the word
            word = s[i : i + length]
            output.append(word)

            # Move pointer past the word
            i += length
            
        return output

