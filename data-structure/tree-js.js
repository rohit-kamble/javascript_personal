function constructFun(value) {
  this.value = value;
  this.left = null;
  this.right = null;
  this.root = null;

  this.makeTree = (value) => {
    let newNode = new constructFun(value);
    const obj = {
      value: newNode.value,
      left: newNode.left,
      right: newNode.right,
    };
    if (this.root === null) {
      this.root = obj;
    } else {
      this.createNode(this.root, obj);
    }
  };

  this.createNode = (node, newNode) => {
    if (node.value > newNode.value) {
      if (node.left === null) {
        node.left = newNode;
      } else {
        this.createNode(node?.left, newNode);
      }
    } else {
      if (node?.right === null) {
        node.right = newNode;
      } else {
        this.createNode(node?.right, newNode);
      }
    }
  };

  this.sercahVal = (node, val) => {
    if (node === null) {
      return false;
    } else if (node.value === val) {
      return true;
    } else if (node.value < val) {
      return this.sercahVal(node.right, val);
    } else {
      return this.sercahVal(node.left, val);
    }
  };
}

const d = new constructFun(10);
d.makeTree(20);
d.makeTree(30);
d.makeTree(40);
d.makeTree(15);
console.log("ans", d.sercahVal(d.root, 41));
// console.log("==", d);
