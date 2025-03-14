/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} val
 * @return {TreeNode}
 */

/** 

Approach : Reccursion 
step 1 : go to  each node if node.val is searching value return the node
step 2 : hanlde edge case where val not found in tree
step 3 : hanlde edge cases where root is empty

*/

function searchBST(root,val){

    if(root === null) return null

    if(root.val === val){
        return root
    }

    if(root.left === null && root.right === null ) return null

    let left = searchBST(root.left,val)
    let right = searchBST(root.right,val)

    return left || right
}
