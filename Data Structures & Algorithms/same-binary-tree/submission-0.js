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

        // ITERATE THROUGH EITHER TREE. 
        // PROB DFS.

        // DURING ITERATION: STORE EACH NODE INSIDE AN ARRAY.
        // LOOP THROUGH 2ND TREE AND DO SAME THING.

        // COMPARE DATA STRUCTURES AND MAKE SURE VALUES AND STRUCTURE MATCH BETWEEN THE TREES.
        // IF THE VALUES APPEARED IN THE SAME ORDER, RETURN TRUE.
        // OTHERWISE RETURN FALSE. 

        // BASE CASE:
        // BASE CASE: OCCURS WHEN THERE ARE NO CHILDREN OF THE NODE.
        // RETURN 0

        if (p === null && q === null) {
            return true
        }

        if (p === null || q === null ) {
            return false
        }

        if (p.val !== q.val) {
            return false
        }

       return this.isSameTree(p.left, q.left) && this.isSameTree(p.right, q.right)
    }
}
