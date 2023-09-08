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
    //插入方法
    insert (value: T, positions: number) {
        //越界判断
        if (positions < 0 || positions > this.size) return false
        //1.根据value创建一个新节点
        const newNode = new Node(value)
        if (positions === 0) {
            //必须先 newNode.next = this.head 这样newNode才能跟他们连起来，如果反过来就会自己指向自己
            newNode.next = this.head
            this.head = newNode
        } else {
            let current = this.head
            let previous: Node<T> | null = null
            let index = 0
            //让previous指向current前面一个节点
            while (index++ < positions && current) {
                previous = current
                newNode.next = current.next
            }
            newNode.next = current
            previous!.next = newNode

        }
        this.size++
        return true
    }
    //删除方法
    removeAt (positions: number): T | null {
        // 1.越界判断
        if (positions < 0 || positions > this.size) return null
        // 2.删除元素
        let current = this.head
        if (positions === 0) {
            this.head = current?.next ?? null //要判断是否是有一个节点，没有则为null
            // return current ? current.next ?? null
        } else {
            let previous: Node<T> | null = null
            let index = 0
            //让previous指向current前面一个节点
            while (index++ < positions && current) {
                previous = current
                current = current.next
            }
            // 跳过current节点（等于删除）
            if (current) {
                previous!.next = current?.next ?? null
                this.size--
                // return current.value
            }
        }
        return current?.value ?? null
    }
    //根据值来删除数据
    remove (value: T): T | null {
        const index = this.indexOf(value)
        return this.removeAt(index)
    }
    //获取方法
    get (positions: number): T | null {
        if (positions < 0 || positions > this.size) return null
        let index = 0
        let current = this.head
        while (index++ < positions && current) {
            current = current.next
        }
        return current?.value ?? null
    }
    //修改方法
    update (value: T, positions: number): boolean {
        if (positions < 0 || positions > this.size) return false
        //获取节点
        let index = 0
        let current = this.head
        while (index++ < positions && current) {
            current = current.next
        }
        //更新数据
        current!.value = value
        return true
    }
    //获取索引
    indexOf (value: T): number {
        let index = 0
        let current = this.head
        while (current) {
            if (current.value === value) {
                return index
            }
            current = current.next
            index++
        }
        return -1
    }
    //判断链表为空
    isEmpty (): boolean {
        if (this.size === 0) {
            return true
        } else {
            return false
        }
    }
}

const linkedList = new LinkedList<string>()
linkedList.append("aaa")
linkedList.append("bbb")
linkedList.append("ccc")
linkedList.append("ddd")
linkedList.append("eee")
linkedList.traverse()

console.log(linkedList.removeAt(2));
linkedList.traverse()
console.log("测试get---------------------");
console.log(linkedList.get(0));
console.log(linkedList.get(1));
console.log(linkedList.get(2));

export { }