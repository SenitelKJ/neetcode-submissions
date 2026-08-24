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
     * @param {TreeNode} roo
     * @return {number}
     */
    maxDepth(root) {

        // Base case: "If the node is null."
        if (root === null) {
             return 0
        }

        const leftDepth = this.maxDepth(root.left)
        const rightDepth = this.maxDepth(root.right)

        return 1 + Math.max(leftDepth, rightDepth)

    }
}
