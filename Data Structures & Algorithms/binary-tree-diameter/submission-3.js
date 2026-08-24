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

        // GLOBAL VAR TO RETAIN DIAMETER.
        let diameter = 0 

        // HELPER FUNCTION TO RECURSE THRUOGH NODES TO FIND DEPTH.
        function findDepth(root) {

            // BASE CASE: STOP RECURSION IF NO LEAF NODES OR TREE IS EMPTY.
            if (!root) return 0

            // RECURSE THROUGH LEFT AND RIGHT SUBTREES TO FIND DEPTH.
            const leftDepth = findDepth(root.left)
            const rightDepth = findDepth(root.right)
            
            // UPDATE THE GLOBAL DIAMETER. 
            diameter = Math.max(diameter, leftDepth+rightDepth)
            return 1 + Math.max(leftDepth, rightDepth)
        }

        findDepth(root)
        return diameter
    }
}
