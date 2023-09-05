// 1.创建Node节点类
class Node<T>{
    value: T  //保存节点内容
    next: Node<T> | null = null;//next指针
    constructor(value: T) {
        this.value = value
    }

}

// 2.创建LinkedList的类
class LinkedList<T>{
    private head: Node<T> | null = null;//头节点
    private size: number = 0 //链表的长度
    get length () {
        return this.size
    }
}

export { }