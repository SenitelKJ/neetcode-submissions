/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     constructor(val = 0, left = null, right = null) {
 *         this.val = val;
 *         this.left = left;
 *         this.right = right;
 *     }
 * }
 */

class Solution {
    /**
     * @param {TreeNode} root
     * @return {boolean}
     */
    isBalanced(root) {
        
        // DEFAULT STATE
        let balanced = true
        // RETURN A BOOLEAN
        // LEFT & RIGHT DIFFER BY NO MORE THAN ONE

        function checkBalance(root) {

            // BASE CASE: IF LEAF NODE... return 0. 
            if (!root) return 0

            const leftDepth = checkBalance(root.left) 
            const rightDepth = checkBalance(root.right)
            
            if (Math.abs(leftDepth-rightDepth) > 1) {
                balanced = false
            }

            return 1 + Math.max(leftDepth, rightDepth)
        }

        checkBalance(root)
        return balanced

    }
}
