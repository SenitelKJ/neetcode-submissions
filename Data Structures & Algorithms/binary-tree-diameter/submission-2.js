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
     * @return {number}
     */
    diameterOfBinaryTree(root) {

    // Length of a path between two nodes in a binary tree is the number of edges between the nodes.
    let diameter = 0 // STORE GLOBAL

    function findDepth(root) {
        if (!root) return 0 // BASE CASE IF NODE IS FALSY.

        const leftDepth = findDepth(root.left)
        const rightDepth = findDepth(root.right)
        
        diameter = Math.max(diameter, leftDepth + rightDepth)
        return 1 + Math.max(leftDepth, rightDepth)
    }

    findDepth(root)

    return diameter

    }
}
