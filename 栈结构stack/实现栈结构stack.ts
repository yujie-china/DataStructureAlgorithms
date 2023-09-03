//封装一个栈

class ArrayStack {
    //定义一个数组，用于存储元素
    private data: any[] = [] //在这里面可以放任何类型

    //实现操作方法
    //push方法：将元素压入到栈中
    push (element: any): void {
        this.data.push(element)//调用这个数组对象的push方法把传入的element放进数组，等同于入栈
    }

    //pop方法：将栈顶元素出栈并返回出去
    pop (): any {
        return this.data.pop()//返回数组元素并用pop方法删除，等同于栈的删除
    }

    //peek 方法：看一眼栈顶元素，但是不作任何操作
    peek (): any {
        return this.data[this.data.length - 1]
    }

}




//创建stack的实例
const stack1 = new ArrayStack()