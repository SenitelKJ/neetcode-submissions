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

        // BASE CASE: If a leaf node.\
        // Same Architect as "SAME TREE"
 
        function isSameTree(root, subRoot) {

            if (root === null && subRoot === null) {
                return true
            }

            if (root === null || subRoot === null || root.val !== subRoot.val) {
                return false
            }

            return (isSameTree(root.left, subRoot.left) && isSameTree(root.right, subRoot.right))
        }

        //  Deemed as same structure and value.
        if (subRoot === null) {
            return true
        }

        // If the root is null, no subtree can have the structure and node values.
        if (root === null) {
            return false
        }

        // Start recursion here.
        if (isSameTree(root, subRoot)) {
            return true
        }
        
        // Recurse Left & Recurse Right of root (whilst checking against the subRoot)
        return (this.isSubtree(root.left, subRoot) || this.isSubtree(root.right, subRoot))
    }
}
