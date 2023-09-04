import IQueue from "./IQueue";

class ArrayQueue<T> implements IQueue<T>{
    private data: T[] = []
    //入队列
    enqueue (element: T): void {
        this.data.push(element);
    }
    //出队列 先进先出
    dequeue (): T | undefined {
        return this.data.shift()
    }
    //返回第一个队列
    peek (): T | undefined {
        return this.data[0]
    }
    //队列是否为空
    isEmpty (): boolean {
        return this.data.length === 0
    }
    get size (): number {
        return this.data.length
    }
    //内部是通过数组保存
}

export default ArrayQueue