import IStack from "./IStack"

//封装一个栈
class ArrayStack<T> implements IStack<T> {
    //定义一个数组，用于存储元素
    private data: any[] = [] //在这里面可以放任何类型

    //实现操作方法
    //push方法：将元素压入到栈中
    push (element: T): void {
        this.data.push(element)//调用这个数组对象的push方法把传入的element放进数组，等同于入栈
    }

    //pop方法：将栈顶元素出栈并返回出去
    pop (): T | undefined {
        return this.data.pop()//返回数组元素并用pop方法删除，等同于栈的删除
    }

    //peek 方法：看一眼栈顶元素，但是不作任何操作
    peek (): T | undefined {
        return this.data[this.data.length - 1]
    }
    //isEmpty:判断栈是否为空
    isEmpty (): boolean {
        return this.data.length == 0
    }
    //size返回栈的数据个数
    size (): number {
        return this.data.length
    }

}
//案例
//创建stack的实例
const stack1 = new ArrayStack<string>()
stack1.push("好好")
stack1.push("学习")
stack1.push("天天")
stack1.push("向上")


// console.log(stack1.peek());
// console.log(stack1.isEmpty());

export default ArrayStack