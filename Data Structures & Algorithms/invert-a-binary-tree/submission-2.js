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
     * @return {TreeNode}
     */
    invertTree(root) {

        // Recursive Function that Inverts a Binary Tree.

        if (root === null) return null; // Base Case: If the node is null, return null.

        // Store left and right nodes.
        const left = this.invertTree(root.left);
        const right = this.invertTree(root.right);

        // Swap nodes.
        root.left = right
        root.right = left

        return root
    }
}
