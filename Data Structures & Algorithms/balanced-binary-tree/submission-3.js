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

        // BASE CASE:

        let check = true

        function checkHeight(root) {
            if (!root) return true

                const leftHeight = checkHeight(root.left)
                const rightHeight = checkHeight(root.right)

                if (Math.abs(leftHeight - rightHeight) > 1) {
                    check = false
                }

                return 1 + Math.max(leftHeight, rightHeight)
        }

        checkHeight(root)
        return check

        }
 
}
