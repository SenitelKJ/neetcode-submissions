class Solution:
    def isPalindrome(self, s: str) -> bool:

        s = s.lower()

        # Remove all non-alphanumeric
        s = re.sub(r'[^a-zA-Z0-9]', '', s)

        # Reverse
        reverse = s[::-1]

        return (s == reverse)

        