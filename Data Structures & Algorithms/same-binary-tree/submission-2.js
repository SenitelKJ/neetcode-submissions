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

    // BASE CASE: IF P AND Q ARE EQUIVALENT IF THEY ARE BOTH NULL.
    if (p === null && q === null) return true
    
    // // FALSE CASE: ONE OF THE ROOTS ARE NULL, or UNEQUAL. ALSO PREVENTS ERROR IN NEXT CONDITION.
    if (p === null || q === null) return false

    // TRUTH CASE: CHECK IF VALUE IS THE SAME // CHECK STRUCTURE?
    if (p.val !== q.val) return false

    // RECURSION / TRAVERSAL:
    return this.isSameTree(p.left, q.left) && this.isSameTree(p.right, q.right)
    }
}
