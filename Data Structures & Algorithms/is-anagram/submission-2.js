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

        let arrayS = s.split('').sort()
        let arrayT = t.split('').sort()

        console.log(arrayS)
        console.log(arrayT)

        for (let i = 0; i < arrayS.length; i++) {
            if (arrayS[i] !== arrayT[i]) {
                return false
            }
        }

        return true
    }
}
