
import Node from "../types/Node"
import { btPrint } from "hy-algokit";
class TreeNode<T> extends Node<T> {
    left: TreeNode<T> | null = null;
    right: TreeNode<T> | null = null;
    parent: TreeNode<T> | null = null;
}
class BSTree<T>{
    private root: TreeNode<T> | null = null;
    /**
     * 判断节点大小，并插入
     * @param node 插入到哪个节点
     * @param newNode 插入到节点的值
     */
    private insertNode (node: TreeNode<T>, newNode: TreeNode<T>) {
        if (newNode.value < node.value) {
            //去左边继续查找空白位置
            if (node.left === null) {
                //左边为空白
                node.left = newNode
            } else {
                //递归调用，继续进行比较
                this.insertNode(node.left, newNode)
            }
        } else {
            //去右边继续查找空白位置
            if (node.right === null) {
                //左边为空白
                node.right = newNode
            } else {
                //递归调用，继续进行比较
                this.insertNode(node.right, newNode)
            }
        }
    }

    //查找这个值，并返回对应的节点
    private searchNode (value: T): TreeNode<T> | null {
        let current = this.root
        let parent: TreeNode<T> | null = null
        while (current) {
            if (current.value == value) {
                return current
            }
            parent = current
            if (value > current.value) {
                current = current.right
            } else {
                current = current.left
            }
            //把父节点保存
            current!.parent = parent
        }
        return null
    }
    //插入数据操作
    insert (value: T) {
        // 1.根据传入的value创建node（TreeNode）节点
        const newNode = new TreeNode(value)

        // 2.判断是否有根节点
        if (!this.root) {
            //根节点为空
            this.root = newNode;
        } else {
            //根节点不为空
            this.insertNode(this.root, newNode)
        }
    }
    //打印树
    print () {
        btPrint(this.root)
    }
    //遍历二叉搜索树
    //先序遍历
    preOrderTraverse () {
        this.preOrderTraverseNode(this.root)
    }
    private preOrderTraverseNode (node: TreeNode<T> | null) {
        if (node) {
            console.log(node.value);
            this.preOrderTraverseNode(node.left)
            this.preOrderTraverseNode(node.right)
        }
    }


    //中序遍历 
    inOrderTraverse () {
        this.inOrderTraverseNode(this.root)
    }
    private inOrderTraverseNode (node: TreeNode<T> | null) {
        if (node) {
            this.inOrderTraverseNode(node.left)
            console.log(node.value);
            this.inOrderTraverseNode(node.right)
        }
    }

    //后序遍历
    postOrderTraverse () {
        this.postOrderTraverseNode(this.root)
    }
    private postOrderTraverseNode (node: TreeNode<T> | null) {
        if (node) {
            this.postOrderTraverseNode(node.left)
            this.postOrderTraverseNode(node.right)
            console.log(node.value);
        }
    }

    //层序遍历
    levelOrderTraverse () {
        //1.没有根节点直接返回
        if (!this.root) return
        //2.创建队列
        const queue: TreeNode<T>[] = [this.root]//第一个节点是根节点
        // 3.遍历队列中所有的节点（依次出队）
        while (queue.length) {
            // 3.1访问节点的过程
            const current = queue.shift()!
            console.log(current?.value)
            // 3.2左右子节点依次入列
            if (current.left) {
                queue.push(current?.left)
            }
            if (current.right) {
                queue.push(current?.right)
            }
        }
    }

    //获取最大值
    getMaxValue (): T | null {
        if (this.root == null) { return null; }
        let current = this.root
        while (current.right) {
            current = current.right
        }
        return current.value
    }
    //获取最小值
    getMinValue (): T | null {
        if (this.root == null) { return null; }
        let current = this.root
        while (current.left) {
            current = current.left
        }
        return current.value
    }
    //搜索特定的值是否存在 20=>boolean 非递归
    search (value: T): boolean {
        return !!this.searchNode(value)//!!把node行转换成boolean
    }
    //实现删除操作
    remove (value: T): boolean {
        // 1.对这个节点进行搜索（是需要删除的节点）
        const current = this.searchNode(value)
        if (!current) return false
        //判断是否是叶子节点
        if (current && current.left === null && current.right === null) {
            if (current == this.root) {
                this.root = null
            } else if (current.parent!.value < current?.value) {//右子节点
                current.parent!.right = null
            } else {//左子节点
                current.parent!.left = null
            }
            return true
        } else if (current.right === null) {//如果删除的节点下面只有一个左子节点
            if (current === this.root) {//如果是根节点
                this.root = current.left
            } else if (current.parent!.value > current?.value) {
                current.parent!.left = current.left
            } else {
                current.parent!.right = current.right
            }
        } else if (current.left === null) {//如果删除的节点下面只有一个右子节点
            if (current === this.root) {//如果是根节点 
                this.root = current.left
            } else if (current.parent!.value > current?.value) {
                current.parent!.left = current.left
            } else {
                current.parent!.right = current.right
            }
            return false
        }
        return true
    }
}
const bst = new BSTree<number>()
bst.insert(11)
bst.insert(7)
bst.insert(15)
bst.insert(5)
bst.insert(3)
bst.insert(9)
bst.insert(8)
bst.insert(10)
bst.insert(13)
bst.insert(12)
bst.insert(14)
bst.insert(20)
bst.insert(18)
bst.insert(25)
bst.insert(6)
bst.print()
// console.log(bst.getMaxValue());
// console.log(bst.getMinValue());
// console.log(bst.search(25));
// console.log(bst.search(30));
//删除子节点
bst.remove(18)
bst.remove(14)
bst.print()
bst.remove(13)
bst.print()
bst.remove(20)
bst.print()
export default { BSTree, TreeNode }