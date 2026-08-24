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

        if (!root) return [] // If the tree is empty, return an empty array.
        const result = [] // Store for final output.
        const queue = [root] // Queue for level order traversal.

        while (queue.length > 0) { // While there are elements in the queue.
            const level = []; // Store nodes of the current level.
            const size = queue.length // Store the size of 

            for (let i = 0; i < size; i++) {
                const node = queue[i];
                level.push(node.val);
                if (node.left) queue.push(node.left);
                if (node.right) queue.push(node.right);
            }

            queue.splice(0, size)
            result.push(level)
        }

        return result

    }
}
