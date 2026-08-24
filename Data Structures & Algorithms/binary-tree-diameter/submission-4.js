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

        // GLOBAL VARIABLE
        let diameter = 0
        
        function findDiameter(root) {
            
            // BASE CASE: If Leafnode...
            if (!root) return 0
            
            const leftDepth = findDiameter(root.left)
            const rightDepth = findDiameter(root.right)
            
            // Update Global Variable: Checks new diameter againsts previous diameter.
            diameter = Math.max(diameter, leftDepth+rightDepth) 

            // Calculates depth through recursion
            return 1 + Math.max(leftDepth, rightDepth)
        }

        findDiameter(root)

        return diameter

    }
}
