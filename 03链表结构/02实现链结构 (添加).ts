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
    head: Node<T> | null = null;//头节点
    private size: number = 0 //链表的长度
    get length () {
        return this.size
    }

    //追加节点
    append (value: T) {
        // this.head=value是不可以的，因为它要追加的是一个节点 
        //1.根据value创建一个新节点
        const newNode = new Node(value)
        //2.判断this.head是否为空,如果为空就直接指向newNode，如果不为空就找到最后一个节点的next来指向newNode
        if (this.head === null) {
            this.head = newNode
        } else {
            //创建一个临时节点，并且指向head
            let current = this.head
            while (current.next) {
                // 如果next有值就向后走（等于它的next） 最后一个next为空则跳出循环
                current = current.next
            }
            //    再让最后一个next指向新的节点
            current.next = newNode
        }
        this.size++
    }

    //遍历列表的方法
    traverse () {
        const values: T[] = []
        let current = this.head
        while (current) {
            values.push(current.value)
            // console.log(current.value)
            current = current.next
        }
        console.log(values.join("-> "));

    }
}

const linkedList = new LinkedList<string>()
linkedList.append("aaa")
linkedList.append("bbb")
linkedList.append("ccc")
linkedList.traverse()
export { }