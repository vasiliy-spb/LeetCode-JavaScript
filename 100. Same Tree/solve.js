/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */

// my solution
var isSameTree = function(p, q) {
    if (!q && !p) return true;
    if (!q || !p) return false;
    let arrQ = [];
    let arrP = [];
    arrQ.push(q);
    arrP.push(p);
    while (arrP.length != 0 && arrQ.length != 0) {
        let qNode = arrQ.pop();
        let pNode = arrP.pop();
        if (qNode.val != pNode.val) return false;
        if (qNode.left) {
            if (!pNode.left) return false;
            arrQ.push(qNode.left);
        }
        if (qNode.right) {
            if (!pNode.right) return false;
            arrQ.push(qNode.right);
        }
        if (pNode.left) {
            if (!qNode.left) return false;
            arrP.push(pNode.left);
        }
        if (pNode.right) {
            if (!qNode.right) return false;
            arrP.push(pNode.right);
        }
    }
    return true;
};


// from GPT
function isSameTree(p, q) {
    // Base case: if both nodes are null, they are considered the same
    if (p === null && q === null) {
        return true;
    }
    
    // If one of the nodes is null and the other is not, they are not the same
    if (p === null || q === null) {
        return false;
    }

    // Check if the values are equal and recursively check the left and right subtrees
    return (p.val === q.val) && isSameTree(p.left, q.left) && isSameTree(p.right, q.right);
}