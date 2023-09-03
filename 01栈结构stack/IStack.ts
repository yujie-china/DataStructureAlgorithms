//定义栈的结构，并导出
//而要使用这个栈结构时得使用 implements IStack<T>
//使用之后必须满足定义栈结构的所有方法和类型，否则就会报错
interface IStack<T> {
    push (element: T): void
    pop (): T | undefined
    peek (): T | undefined
    isEmpty (): boolean
    size (): number
}

export default IStack