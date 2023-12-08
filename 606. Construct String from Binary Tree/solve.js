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
 * @return {string}
 */

// из дерева в строку
var tree2str = function (root) {
    if (!root.left && !root.right) return `${root.val}`;
    if (root.left && root.right) {
        return `${root.val}(${tree2str(root.left)})(${tree2str(root.right)})`;
    } else if (root.left) {
        return `${root.val}(${tree2str(root.left)})`;
    } else if (root.right) {
        return `${root.val}()(${tree2str(root.right)})`;
    }
};

let four = new TreeNode(4)
let three = new TreeNode(3)    
let two = new TreeNode(2, four)
let rootNode = new TreeNode(1, two, three)

console.log(tree2str(rootNode)) // "1(2(4))(3)"

// let four = new TreeNode(4)
// let three = new TreeNode(3)    
// let two = new TreeNode(2, null, four)
// let rootNode = new TreeNode(1, two, three)

// console.log(tree2str(rootNode)) // "1(2()(4))(3)"

function TreeNode(val, left, right) {
    this.val = (val===undefined ? 0 : val);
    this.left = (left===undefined ? null : left);
    this.right = (right===undefined ? null : right);
}

//$ ———————————————————————————————

// из массива в строку
// var tree2str = function (root) {
//     return treeToLine(root, 0, 0);
//     function treeToLine(arr, ind, deep) {
//         if (ind >= arr.length) {
//             return '';
//         }
//         if (arr[ind] == null) {
//             return '()';
//         }
//         let child = `${treeToLine(arr, 2 * ind + 1, deep + 1)}${treeToLine(arr, 2 * ind + 2, deep + 1)}`;
        
//         if (ind === 0) {
//             return `${arr[ind]}` + child;
//         } else {
//             return `(${arr[ind]}` + child + ')';
//         }
//     }
// };



// console.log(`ind = ${ind}, arr[ind] = ${arr[ind]}, deep = ${deep}, child = ${child}`);
// root = [1, 2, 3, 4]
// console.log(tree2str(root)) // "1(2(4))(3)"

// root = [1, 2, 3, null, 4]
// console.log(tree2str(root)) // "1(2()(4))(3)"

