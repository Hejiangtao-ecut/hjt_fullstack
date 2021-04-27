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
 * @param {number} low
 * @param {number} high
 * @return {number}
 */
var rangeSumBST = function(root, low, high) {
    let add = 0;
    if(root.val>=low&&root.val<=high){
        add += root.val;
    }
    if(root.left !== null){
        add += rangeSumBST(root.left,low,high);
    }
    if(root.right !== null){
        add += rangeSumBST(root.right,low,high);
    }
    return add;
};