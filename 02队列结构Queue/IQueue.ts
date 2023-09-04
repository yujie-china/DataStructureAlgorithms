import IList from "../types/Ilist"

interface IQueue<T> extends IList<T> {
    //入队
    enqueue (element: T): void
    //出队
    dequeue (): T | undefined
    // //peek
    // peek (): T | undefined
    // //判断是否为空
    // isEmpty (): boolean
    // //元素的个数
    // get size (): number
}
export default IQueue