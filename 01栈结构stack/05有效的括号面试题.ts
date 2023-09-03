import ArrayStack from "./02实现栈结构stack(重构优化)";

function isValid (s: string): boolean {
    //1.创建栈结构
    const stack = new ArrayStack()
    // 2.遍历s中所有的括号
    for (let i = 0; i < s.length; i++) {
        const c = s[i];
        switch (c) {
            case "(":
                stack.push(")")
                break
            case "[":
                stack.push("]")
                break
            case "{":
                stack.push("}")
                break
            default:
                if (c !== stack.pop()) return false
                break
        }
    }
    return stack.isEmpty()
}

console.log(isValid("()[]"));//true
console.log(isValid("(]"));//false
console.log(isValid("()[()]"));//true





export { }