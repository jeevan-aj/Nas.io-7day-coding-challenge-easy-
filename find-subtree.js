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
