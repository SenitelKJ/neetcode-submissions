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
     * @param {TreeNode} subRoot
     * @return {boolean}
     */
    isSubtree(root, subRoot) {

    // Helper function to check if two trees are identical.
        function isSameTree(p, q) {
            if (!p && !q) return true; // Both trees are null.
            if (!p || !q || p.val !== q.val) return false; // Mismatch in structure or value.
            return isSameTree(p.left, q.left) && isSameTree(p.right, q.right);
        }

        if (!subRoot) return true; // An empty tree is a subtree of any tree.
        if (!root) return false;   // A non-empty tree cannot be a subtree of an empty tree.

        // Check if the current tree matches or if the subtree is in the left or right child.
        return isSameTree(root, subRoot) || this.isSubtree(root.left, subRoot) || this.isSubtree(root.right, subRoot);
    }

}
