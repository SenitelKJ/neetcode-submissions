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

        // Helper Function to check if two trees are identical.
        function sameTree(root, subRoot) {

            // Return True if Both Trees are Null (Subtree exists)
            if (root === null && subRoot === null) {
                    return true
            }  

            // If Both Root & SubRoot are not empty, and of equal value, keep checking tree.
            if (root === null || subRoot === null || root.val !== subRoot.val) {
                return false 
            }

            // If one of the trees are empty, return false. 
            return (sameTree(root.left, subRoot.left) && sameTree(root.right, subRoot.right))
        }

          // If Subroot Tree is Null; it is a subtree of any tree.
        if (subRoot === null) {
            return true
        }

        // The Root Tree is Null; there cannot be a subtree. 
        if (root === null) {
            return false
        }

      
        // Begin checking at this spot.
        if (sameTree(root, subRoot)) {
            return true
        }

        // Recurse Left & Right of Root Tree.
        return (this.isSubtree(root.left, subRoot) || this.isSubtree(root.right, subRoot))
    }
}
