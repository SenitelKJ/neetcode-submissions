class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        if (s.length !== t.length) {
            return false
        }

        let charCount = {}

        for (let i = 0; i < s.length; i++) {
            charCount[s[i]] = (charCount[s[i]] || 0) + 1;
            charCount[t[i]] = (charCount[t[i]] || 0) - 1;

        }

        console.log(charCount)

        for (let count in charCount) {
            if (charCount[count] !== 0) {
                return false
            }
        }

        return true
    }
}
