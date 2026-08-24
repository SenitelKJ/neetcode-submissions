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

        // Establish Base Case
        if (root === null) {
            return null
        }

        // DFS Traversal -> Travel down the Left Side First.
        const left = this.invertTree(root.left)
        const right = this.invertTree(root.right)

        // Swap the node positions.
        root.right = left
        root.left = right

        return root
    }
}
