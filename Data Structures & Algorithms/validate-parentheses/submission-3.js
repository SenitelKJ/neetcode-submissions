class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {

    let stack = []
    let dic = {
        '(': ')',
        '{': '}',
        '[': ']'
    }
        
        for (let i = 0; i < s.length; i++) {
            
            if (s[i] == '(' || s[i] == '{' || s[i] == '['  ) {
                stack.push(s[i])
            } else if (s[i] === dic[stack[stack.length-1]]) {
                console.log(stack)
                stack.pop()
            } else {
                console.log("false")
                return false
            }
        }
        
        if (stack.length == 0) {
            console.log("true")
            return true
        } else {
            console.log("false")
            return false
        }
    }
}
