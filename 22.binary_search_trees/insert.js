class Node {
    constructor(val) {
        this.val = val;
        this.left = null;
        this.right = null;
    }
}

class BinarySearchTree {
    constructor() {
        this.root = null;
    }

    insert(val) {
        let node = new Node(val);

        if (this.root === null) {
            this.root = node;
            return this;
        } 
            
        let current = this.root;
        while(true) {
            if (val === current.val) return undefined;
            if (val < current.val) {
                if(current.left === null) {
                    current.left = node;
                    return this;
                }
                current = current.left;
            } else if(val > current.val) {
                if(current.right === null) {
                    current.right = node;
                    return this;
                }
                current = current.right;
            }
        }
    }
}

let bst = new BinarySearchTree();

bst.insert(10).insert(5).insert(13).insert(11).insert(2).insert(16).insert(7);
console.log(bst);
console.log(bst.root.left);

// node insert.js