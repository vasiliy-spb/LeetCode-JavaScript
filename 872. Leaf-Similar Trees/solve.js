/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root1
 * @param {TreeNode} root2
 * @return {boolean}
 */
var leafSimilar = function(root1, root2) {
    let nodes1 = new Array();
    let nodes2 = new Array();
    let values1 = new Array();
    let values2 = new Array();
    
    // Обход дерева "поэтажно" сверху вниз
    // nodes1.push(root1);
    // nodes2.push(root2);
    // for (let i = 0; i < nodes1.length; i++) {
    //     if (!nodes1[i].left && !nodes1[i].right) values1.push(nodes1[i].val);
    //     if (nodes1[i].left) nodes1.push(nodes1[i].left);
    //     if (nodes1[i].right) nodes1.push(nodes1[i].right);
    //     if (!nodes2[i].left && !nodes2[i].right) values2.push(nodes2[i].val);
    //     if (nodes2[i].left) nodes2.push(nodes2[i].left);
    //     if (nodes2[i].right) nodes2.push(nodes2[i].right);
    // }

    // обход дерева слева направо
    let current = root1;
    while (current !== null || nodes1.length > 0) {
        while (current !== null) {
            nodes1.push(current);
            if (!current.left && !current.right) values1.push(current.val);
            current = current.left;
        }

        current = nodes1.pop();

        current = current.right;
    }

    current = root2;
    while (current !== null || nodes2.length > 0) {
        while (current !== null) {
            nodes2.push(current);
            if (!current.left && !current.right) values2.push(current.val);
            current = current.left;
        }

        current = nodes2.pop();

        current = current.right;
    }

    if (values1.length !== values2.length) return false;
    console.log(`values1 = ${values1}`)
    console.log(`values2 = ${values2}`)
    for (let i = 0; i < values1.length; i++) {
        if (values1[i] != values2[i]) return false;
    }
    return true;
};