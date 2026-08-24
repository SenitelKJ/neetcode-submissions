class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    // isPalindrome(s) {
    
    // let original = s.replace(/[^a-zA-Z0-9]/g, '').toLowerCase()
    // let reverse = s.replace(/[^a-zA-Z0-9]/g, '').toLowerCase().split('').reverse().join('')
    // console.log(reverse)
    // console.log(original)

    // return original === reverse

     isPalindrome(s) {
        s = s.replace(/[^a-zA-Z0-9]/g, '')
        s = s.toLowerCase()
        console.log(s.length)
 
        for (let i = 0; i < s.length; i++) {
            if (s[i] !== (s.length-1)/2) {
                if (s[i] !== s[(s.length-1)-i] )
                    return false
            }
        }
        return true
    }
}
