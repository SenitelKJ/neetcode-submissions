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
        
    let isBalanced = true

        function traversal(root) {
            // BASE CASE.
            if (root === null) {
                return 0
            }

            const leftHeight = traversal(root.left)
            const rightHeight = traversal(root.right)

            if (Math.abs(leftHeight - rightHeight) > 1) {
                isBalanced = false;
            }

            return 1 + Math.max(leftHeight, rightHeight);
        }

        traversal(root)
        return isBalanced

    }
}
