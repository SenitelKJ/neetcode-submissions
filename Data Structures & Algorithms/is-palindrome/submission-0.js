class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
    
    let original = s.replace(/[^a-zA-Z0-9]/g, '').toLowerCase()
    let reverse = s.replace(/[^a-zA-Z0-9]/g, '').toLowerCase().split('').reverse().join('')
    console.log(reverse)
    console.log(original)

    return original === reverse

    }

  
}
