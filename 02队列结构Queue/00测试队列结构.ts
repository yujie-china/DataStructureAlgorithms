import ArrayQueue from "./01实现队列结构（数组）";

const queue = new ArrayQueue<string>();

queue.enqueue("queue")
queue.enqueue("Array")

console.log(queue.peek());
console.log(queue.isEmpty());
console.log(queue.size);
