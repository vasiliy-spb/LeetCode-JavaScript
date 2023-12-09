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
 * @return {number[]}
 */
// если значание node.val не уникальные, то подойдёт это решение
var inorderTraversal = function (root) {
    if (!root) return [];
    let result = [];
    let nodeArray = [];
    let nodeArray2 = [];
    nodeArray.push(root);
    nodeArray2.push(root);
    while (nodeArray.length > 0) {
        let currentNode = nodeArray.shift();
        if (currentNode.left) {
            let start = nodeArray2.slice(0, nodeArray2.indexOf(currentNode))
            let end = nodeArray2.slice(nodeArray2.indexOf(currentNode));
            start.push(currentNode.left)
            nodeArray2 = start.concat(end)
            nodeArray.push(currentNode.left);
        }
        if (currentNode.right) {
            let start = nodeArray2.slice(0, nodeArray2.indexOf(currentNode) + 1)
            let end = nodeArray2.slice(nodeArray2.indexOf(currentNode) + 1);
            start.push(currentNode.right)
            nodeArray2 = start.concat(end)
            nodeArray.push(currentNode.right);
        }
    }
    nodeArray2.forEach(node => result.push(node.val));
    return result;
};

// если значание node.val уникальные, то подойдёт это решение
// var inorderTraversal = function (root) {
//     if (!root) return [];
//     let result = [];
//     let nodeArray = [];
//     let nodeArray2 = [];
//     // result.push(root.val)
//     nodeArray.push(root);
//     nodeArray2.push(root);
//     while (nodeArray.length > 0) {
//         let currentNode = nodeArray.shift();
//         // console.log(`currentNode = ${currentNode.val}, currentNode.left = ${currentNode.left}, currentNode.right = ${currentNode.right}`)
//         if (currentNode.left) {
//             // let start = result.slice(0, result.indexOf(currentNode.val))
//             // let end = result.slice(result.indexOf(currentNode.val));
//             let start = nodeArray2.slice(0, nodeArray2.indexOf(currentNode))
//             let end = nodeArray2.slice(nodeArray2.indexOf(currentNode));

//             // console.log('add left')
//             // console.log(`start = ${start}`)
//             // console.log(`end = ${end}`)
            
//             // start.push(currentNode.left.val)
//             start.push(currentNode.left)
//             // result = start.concat(end)
//             nodeArray2 = start.concat(end)
//             nodeArray.push(currentNode.left);
//         }
//         if (currentNode.right) {
//             // let start = result.slice(0, result.indexOf(currentNode.val) + 1)
//             // let end = result.slice(result.indexOf(currentNode.val) + 1);
//             let start = nodeArray2.slice(0, nodeArray2.indexOf(currentNode) + 1)
//             let end = nodeArray2.slice(nodeArray2.indexOf(currentNode) + 1);
//             // console.log('add right')
//             // console.log(`start = ${start}`)
//             // console.log(`end = ${end}`)
            

//             start.push(currentNode.right)
//             // result = start.concat(end)
//             nodeArray2 = start.concat(end)
//             nodeArray.push(currentNode.right);
//         }
//     }
//     nodeArray2.forEach(node => result.push(node.val));
//     return result;
// };


function TreeNode(val, left, right) {
    this.val = (val === undefined ? 0 : val);
    this.left = (left === undefined ? null : left);
    this.right = (right === undefined ? null : right);
}

let three = new TreeNode(3)
let two = new TreeNode(2, three, null)
let rootNode = new TreeNode(1, null, two)

console.log(inorderTraversal(rootNode)) // [1,3,2]