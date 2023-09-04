import ArrayQueue from "./01实现队列结构（数组）"

function hotPotato (names: string[], num: number) {
    //1.创建队列
    const queue = new ArrayQueue<string>()
    // 2.将name入队
    for (const name of names) {
        queue.enqueue(name)
    }
    while (queue.size > 1) {
        //3.淘汰规则
        for (let i = 1; i < num; i++) {
            const name = queue.dequeue()
            if (name) queue.enqueue(name)
        }
        queue.dequeue()
    }
    return queue.dequeue()
}

const leftName = hotPotato(["why", "james", "she", "he", "jie", "pink"], 3)
console.log(leftName);
