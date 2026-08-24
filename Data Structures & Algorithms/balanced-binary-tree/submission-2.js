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

        // MODIFIED DEPTH DFS
        let boolean = true

        function checkBalanced(root) {

    
            // BASE CASE 
            if (!root) return 0

            let leftDepth = checkBalanced(root.left)
            let rightDepth = checkBalanced(root.right)

            if (Math.abs(leftDepth - rightDepth) > 1) {
                boolean = false
            }

            return 1 + Math.max(leftDepth, rightDepth)

        }

        checkBalanced(root)
        return boolean
    }
}
