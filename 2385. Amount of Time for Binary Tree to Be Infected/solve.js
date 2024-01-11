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
 * @param {number} start
 * @return {number}
 */

class TreeNode {
    constructor(value) {
      this.value = value;
      this.left = null;
      this.right = null;
    }
  }

// var amountOfTime = function(root, start) {

//     let startNode;

//     function calculateHeight(node) {
//         if (!node) return 0;

//         if (node.value === start) {
//             startNode = node;
//         }

//         const leftHeight = calculateHeight(node.left);
//         const rightHeight = calculateHeight(node.right);

//         return 1 + Math.max(leftHeight, rightHeight);
//     }

//     const leftDistance = calculateHeight(root.left);
//     let left = false;
//     if (startNode) {
//         left = true;
//     }
//     const rightDistance = calculateHeight(root.right);

//     const startDistance = calculateHeight(startNode);

//     console.log(`leftDistance = ${leftDistance}, rightDistance = ${rightDistance}, startDistance = ${startDistance}`)

//     if (root.value === start) {
//         return Math.max(leftDistance, rightDistance);
//     }

//     if (left) {
//         return Math.max(rightDistance + (leftDistance + 1 - startDistance), startDistance - 1);
//     } else {
//         return Math.max(leftDistance + (rightDistance + 1 - startDistance), startDistance - 1);
//     }

//     // console.log(`left = ${leftDistance}, right = ${rightDistance}`)

//     // return calculateHeight(root);
// };


// var amountOfTime = function(root, start) {

//     let parents = new Array(1e5 + 2);
//     parents.fill(null);
//     let visited = new Array(1e5 + 2);
//     parents.fill(false);

//     function findNode(node) {
//         if (node == null) return null;
//         if (node.left) {
//             parents[node.left.value] = node;
//         }
//         if (node.right) {
//             parents[node.right.value] = node;
//         }
//         if (node.value === start) {
//             return node;
//         }
//         return findNode(node.left) || findNode(node.right);
//     }

//     let startNode = findNode(root);

//     // console.log(parents)
//     console.log(`найден узел: ${startNode.value}`);

//     let maxCount = 0;

//     function calculateMaxSteps(node, count) {
//         if (!node) {
//             if (count > maxCount) {
//                 maxCount = count;
//             }
//             return;
//         }
//         visited[node.value] = true;
//         // if (parents[node.value]) calculateMaxSteps(parents[node.value], count + 1);
//         // if (node.left) calculateMaxSteps(node.left, count + 1);
//         // if (node.right) calculateMaxSteps(node.right, count + 1);
//         if (parents[node.value]) {
//             if (!visited[parents[node.value]]) {
//                 calculateMaxSteps(parents[node.value], count + 1);
//             }
//         }
//         if (node.left) {
//             if (!visited[node.left.value]) {
//                 calculateMaxSteps(node.left, count + 1);
//             }
//         }
//         if (node.right) {
//             if (!visited[node.right.value]) {
//                 calculateMaxSteps(node.right, count + 1);
//             }
//         }
//     }

//     if (startNode) calculateMaxSteps(startNode, 1);

//     return maxCount;
// };

// преобразую дерево в неориентированный граф, а затем выполню обход в ширину
var amountOfTime = function(root, start) {

    let graph = new Map();

    let array = new Array();
    array.push(root);

    let startNode;

    for (let i = 0; i < array.length; i++) {
        const currentNode = array[i];
        if (currentNode.value === start) startNode = currentNode;
        if (!graph.has(currentNode)) {
            graph.set(currentNode,[]);
        }
        if (currentNode.left) {
            array.push(currentNode.left);
            graph.get(currentNode).push(currentNode.left);
            if (!graph.has(currentNode.left)) {
                graph.set(currentNode.left, []);
            }
            graph.get(currentNode.left).push(currentNode);
        }
        if (currentNode.right) {
            array.push(currentNode.right);
            graph.get(currentNode).push(currentNode.right);
            if (!graph.has(currentNode.right)) {
                graph.set(currentNode.right, []);
            }
            graph.get(currentNode.right).push(currentNode);
        }
    }

    let visited = new Set();
    visited.add(startNode.value);
    let queue = [{node: startNode, time: 0}];

    let maxLength = 0;

    while (queue.length > 0) {
        
        const {node, time} = queue.shift();

        maxLength = Math.max(maxLength, time);

        for (const neighbor of graph.get(node)) {
            if (!visited.has(neighbor.value)) {
                queue.push({node: neighbor, time: time + 1});
                visited.add(neighbor.value);
            }
        }

    }
    
    return maxLength;
};


let root = new TreeNode(1);
root.left = new TreeNode(5);
root.right = new TreeNode(3);
root.right.left = new TreeNode(10);
root.right.right = new TreeNode(6);
root.left.right = new TreeNode(4);
root.left.right.left = new TreeNode(9);
root.left.right.right = new TreeNode(2);

console.log(amountOfTime(root, 3)); // expected 4
console.log()



root = new TreeNode(1);

console.log(amountOfTime(root, 1)); // expected 0
console.log()



root = new TreeNode(1);
root.left = new TreeNode(2);
root.right = new TreeNode(null);
root.left.left = new TreeNode(3);
root.left.right = new TreeNode(null);
root.left.left.left = new TreeNode(4);
root.left.left.right = new TreeNode(null);
root.left.left.left.left = new TreeNode(5);

console.log(amountOfTime(root, 2)); // expected 3
console.log()



root = new TreeNode(16);
root.left = new TreeNode(null);
root.right = new TreeNode(20);
root.right.left = new TreeNode(7);
root.right.right = new TreeNode(12);
root.right.left.left = new TreeNode(null);
root.right.left.right = new TreeNode(15);
root.right.right.left = new TreeNode(null);
root.right.right.right = new TreeNode(19);
root.right.left.right.left = new TreeNode(null);
root.right.left.right.right = new TreeNode(1);
root.right.right.right.left = new TreeNode(2);

console.log(amountOfTime(root, 1)); // expected 6
console.log()


/*
16,
null,20,
        7,          12,
    null,15,        null,19,
        null,1,          2
*/

