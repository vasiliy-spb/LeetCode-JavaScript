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

class TreeNode {
    constructor(val, left, right) {
        this.val = (val === undefined ? 0 : val);
        this.left = (left === undefined ? null : left);
        this.right = (right === undefined ? null : right);
    }
}

var rangeSumBST = function (root, low, high) {
    let nodeArray = [];
    nodeArray.push(root);
    let sum = 0;
    for (let i = 0; i < nodeArray.length; i++) {
        if (nodeArray[i].left) nodeArray.push(nodeArray[i].left);
        if (nodeArray[i].right) nodeArray.push(nodeArray[i].right);
        if (nodeArray[i].val >= low && nodeArray[i].val <= high) {
            sum += nodeArray[i].val;
        }
    }
    return sum;
};

let root = [10,5,15,3,7,null,18];
let low = 7;
let high = 15;
console.log(rangeSumBST(root, low, high)); // 32
console.log()


