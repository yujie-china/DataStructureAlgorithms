import ArrayStack from "./02实现栈结构stack(重构优化)"

function decimalToBinary (decimal: number): string {
    //创建一个栈，用于存放余数
    const stack = new ArrayStack<number>()

    //使用循环：while（不确定次数，只知道循环结束跳转）/for（知道循环次数）
    while (decimal > 0) {
        const result = decimal % 2
        stack.push(result)
        decimal = Math.floor(decimal / 2)
    }

    //所有的余数都已经放在了stack中，就只需要取出来就可以了
    let binary = ''
    while (!stack.isEmpty()) {
        // console.log(stack.pop());
        binary += stack.pop()

    }
    return binary
}
const result = decimalToBinary(35)
console.log(result);
