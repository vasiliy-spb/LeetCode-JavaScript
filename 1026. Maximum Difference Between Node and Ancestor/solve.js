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
 * @return {number}
 */

class TreeNode {
    constructor(val) {
        this.val = val;
        this.left = null;
        this.right = null;
    }
}

// var maxAncestorDiff = function(root) {
//     let maxDiff = 0;
//     let parents = new Array(5001);
//     parents.fill(null);
//     let tree = [];
//     tree.push(root);
//     for (let i = 0; i < tree.length; i++) {
//         const currentNode = tree[i];
//         if (currentNode.left) {
//             if (!parents[currentNode.left.val]) {
//                 console.log(`LEFT: maxDiff = ${maxDiff}, currentNode.val = ${currentNode.val}, currentNode.left.val = ${currentNode.left.val}, refresh maxDiff = ${Math.max(Math.abs(currentNode.val - currentNode.left.val), maxDiff)}`)
//                 parents[currentNode.left.val] = currentNode;
//                 maxDiff = Math.max(Math.abs(currentNode.val - currentNode.left.val), maxDiff);
//             } else {
//                 let currentParent = currentNode;
//                 while (currentParent) {
//                     console.log(`LEFT while: maxDiff = ${maxDiff}, currentParent.val = ${currentParent.val}, currentNode.left.val = ${currentNode.left.val}, refresh maxDiff = ${Math.max(Math.abs(currentParent.val - currentNode.left.val), maxDiff)}`)
//                     maxDiff = Math.max(Math.abs(currentParent.val - currentNode.left.val), maxDiff);
//                     currentParent = parents[currentParent.val];
//                 }
//             }
//             let currentParent = currentNode;
//                 while (currentParent) {
//                     console.log(`LEFT while: maxDiff = ${maxDiff}, currentParent.val = ${currentParent.val}, currentNode.left.val = ${currentNode.left.val}, refresh maxDiff = ${Math.max(Math.abs(currentParent.val - currentNode.left.val), maxDiff)}`)
//                     maxDiff = Math.max(Math.abs(currentParent.val - currentNode.left.val), maxDiff);
//                     currentParent = parents[currentParent.val];
//                 }
//             tree.push(currentNode.left);
//         }
//         if (currentNode.right) {
//             if (!parents[currentNode.right.val]) {
//                 console.log(`RIGHT: maxDiff = ${maxDiff}, currentNode.val = ${currentNode.val}, currentNode.left.val = ${currentNode.right.val}, refresh maxDiff = ${Math.max(Math.abs(currentNode.val - currentNode.right.val), maxDiff)}`)
//                 parents[currentNode.right.val] = currentNode;
//                 maxDiff = Math.max(Math.abs(currentNode.val - currentNode.right.val), maxDiff);
//             } else {
//                 let currentParent = currentNode;
//                 while (currentParent) {
//                     console.log(`RIGHT while: maxDiff = ${maxDiff}, currentParent.val = ${currentParent.val}, currentNode.left.val = ${currentNode.right.val}, refresh maxDiff = ${Math.max(Math.abs(currentParent.val - currentNode.right.val), maxDiff)}`)
//                     maxDiff = Math.max(Math.abs(currentParent.val - currentNode.right.val), maxDiff);
//                     currentParent = parents[currentParent.val];
//                 }
//             }
//             let currentParent = currentNode;
//                 while (currentParent) {
//                     console.log(`RIGHT while: maxDiff = ${maxDiff}, currentParent.val = ${currentParent.val}, currentNode.left.val = ${currentNode.right.val}, refresh maxDiff = ${Math.max(Math.abs(currentParent.val - currentNode.right.val), maxDiff)}`)
//                     maxDiff = Math.max(Math.abs(currentParent.val - currentNode.right.val), maxDiff);
//                     currentParent = parents[currentParent.val];
//                 }
//             tree.push(currentNode.right);
//         }
//     }
//     return maxDiff;
// };

// var maxAncestorDiff = function(root) {
//     let maxDiff = 0;
//     let parents = new Array(5001);
//     parents.fill(null);
//     let tree = [];
//     tree.push({node: root, minAncestor: root.val, maxAncestor: root.val});
//     for (let i = 0; i < tree.length; i++) {
//         const currentNode = tree[i];
//         maxDiff = Math.max(Math.abs(currentNode.val - currentNode.minAncestor), maxDiff);
//         maxDiff = Math.max(Math.abs(currentNode.maxAncestor - currentNode.val), maxDiff);
//         if (currentNode.left) {
//             tree.push({node: currentNode.left, minAncestor: Math.min(currentNode.val, currentNode.minAncestor), maxAncestor: Math.max(currentNode.val, currentNode.maxAncestor)});
//             // if (!parents[currentNode.left.val]) {
//             //     console.log(`LEFT: maxDiff = ${maxDiff}, currentNode.val = ${currentNode.val}, currentNode.left.val = ${currentNode.left.val}, refresh maxDiff = ${Math.max(Math.abs(currentNode.val - currentNode.left.val), maxDiff)}`)
//             //     parents[currentNode.left.val] = currentNode;
//             //     maxDiff = Math.max(Math.abs(currentNode.val - currentNode.left.val), maxDiff);
//             // }
//             // let currentParent = currentNode;
//             //     while (currentParent) {
//             //         console.log(`LEFT while: maxDiff = ${maxDiff}, currentParent.val = ${currentParent.val}, currentNode.left.val = ${currentNode.left.val}, refresh maxDiff = ${Math.max(Math.abs(currentParent.val - currentNode.left.val), maxDiff)}`)
//             //         maxDiff = Math.max(Math.abs(currentParent.val - currentNode.left.val), maxDiff);
//             //         currentParent = parents[currentParent.val];
//             //     }
//             // tree.push(currentNode.left);
//         }
//         if (currentNode.right) {
//             tree.push({node: currentNode.right, minAncestor: Math.min(currentNode.val, currentNode.minAncestor), maxAncestor: Math.max(currentNode.val, currentNode.maxAncestor)});
//             // if (!parents[currentNode.right.val]) {
//             //     console.log(`RIGHT: maxDiff = ${maxDiff}, currentNode.val = ${currentNode.val}, currentNode.left.val = ${currentNode.right.val}, refresh maxDiff = ${Math.max(Math.abs(currentNode.val - currentNode.right.val), maxDiff)}`)
//             //     parents[currentNode.right.val] = currentNode;
//             //     maxDiff = Math.max(Math.abs(currentNode.val - currentNode.right.val), maxDiff);
//             // }
//             // let currentParent = currentNode;
//             //     while (currentParent) {
//             //         console.log(`RIGHT while: maxDiff = ${maxDiff}, currentParent.val = ${currentParent.val}, currentNode.left.val = ${currentNode.right.val}, refresh maxDiff = ${Math.max(Math.abs(currentParent.val - currentNode.right.val), maxDiff)}`)
//             //         maxDiff = Math.max(Math.abs(currentParent.val - currentNode.right.val), maxDiff);
//             //         currentParent = parents[currentParent.val];
//             //     }
//             // tree.push(currentNode.right);
//         }
//     }
//     return maxDiff;
// };

var maxAncestorDiff = function(root) {
    let maxDiff = 0;
    let tree = [];
    tree.push({node: root, minAncestor: root.val, maxAncestor: root.val});
    while (tree.length > 0) {
        const currentNode = tree.pop();
        // console.log(`maxDiff = ${maxDiff}, currentNode.val = ${currentNode.node.val}, refresh maxDiff = ${Math.max(Math.abs(currentNode.node.val - currentNode.minAncestor), Math.abs(currentNode.maxAncestor - currentNode.node.val), maxDiff)}`)
        maxDiff = Math.max(Math.abs(currentNode.node.val - currentNode.minAncestor), Math.abs(currentNode.maxAncestor - currentNode.node.val), maxDiff);
        if (currentNode.node.left) {
            tree.push({
                node: currentNode.node.left, 
                minAncestor: Math.min(currentNode.node.val, currentNode.minAncestor), 
                maxAncestor: Math.max(currentNode.node.val, currentNode.maxAncestor)});
        }
        if (currentNode.node.right) {
            tree.push({
                node: currentNode.node.right, 
                minAncestor: Math.min(currentNode.node.val, currentNode.minAncestor), 
                maxAncestor: Math.max(currentNode.node.val, currentNode.maxAncestor)});
        }
    }
    return maxDiff;
};

/*
                   8,
        3,                  10,
    1,       6,     null,      14,
null,null,  4,7,              13
*/
let root = new TreeNode(8);
root.left = new TreeNode(3);
root.right = new TreeNode(10);
root.left.left = new TreeNode(1);
root.left.right = new TreeNode(6);
root.right.right = new TreeNode(14);
root.left.right.left = new TreeNode(4);
root.left.right.right = new TreeNode(7);
root.right.right.left = new TreeNode(13);

console.log(maxAncestorDiff(root)); // 7



root = new TreeNode(1);
root.left = new TreeNode(1);
root.right = new TreeNode(8);

console.log(maxAncestorDiff(root)); // 7
