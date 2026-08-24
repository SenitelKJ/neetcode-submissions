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
     * @return {number[][]}
     */
    levelOrder(root) {

        if (!root) return [];

        const result = []
        const queue = [root]

        while (queue.length > 0) {
            const level = [];
            const size = queue.length; // Number of Nodes at this current level.

            for (let i = 0; i < size; i++) {
                const node = queue.shift(); // Dequeue the next node.
                level.push(node.val) // Process the next node.

                // Enquire children for the next level.
                if (node.left) queue.push(node.left)
                if (node.right) queue.push(node.right)
            }

            result.push(level);
        }
    return result
    
    } 
}
