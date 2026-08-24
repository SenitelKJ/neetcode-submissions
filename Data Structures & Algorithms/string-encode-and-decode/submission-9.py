class Solution:

    def encode(self, strs: List[str]) -> str:

        print(strs)
        encode_string = []
        for i in strs:
            encode_string.append('#' + str(len(i)) + ':' + i);
        encode_string = ''.join(encode_string)
        print(encode_string)
        return encode_string
    def decode(self, s: str) -> List[str]:
        result = []
        i = 0

        while i < len(s):
            if s[i] == '#':
                # 1. Find the colon that marks the end of the length number
                # We start searching from the current hashtag
                colon_index = s.find(':', i)
                
                # 2. The number is everything between the '#' and the ':'
                length = int(s[i + 1 : colon_index])
                
                # 3. The actual string starts right AFTER the ':'
                start_of_data = colon_index + 1
                content = s[start_of_data : start_of_data + length]
                result.append(content)

                # 4. Jump the pointer past the string you just read
                i = start_of_data + length
            else:
                i += 1
            
        return result
                

    
