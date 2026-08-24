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
     * @param {TreeNode} p
     * @param {TreeNode} q
     * @return {boolean}
     */
    isSameTree(p, q) {

        // If P & Q are falsy, return true (equivalent).
        if (!p && !q) return true

        // If either P or Q is falsy (but not both), and value is not the same, return falsae.
        if (!p || !q || p.val !== q.val) return false

       return this.isSameTree(p.left, q.left) && this.isSameTree(p.right, q.right)
    }
}
