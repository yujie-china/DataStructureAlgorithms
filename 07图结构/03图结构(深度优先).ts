class Graph<T>{//；邻接表
    private verteces: T[] = []//顶点
    private adJList: Map<T, T[]> = new Map()


    /**添加顶点和边的方法 */
    addVertex (vertex: T) {//顶点
        //将顶点添加到数组中保存
        this.verteces.push(vertex)
        //创建一个邻接表中的数组
        this.adJList.set(vertex, [])
    }

    addEdge (v1: T, v2: T) {//边
        this.adJList.get(v1)?.push(v2)
        this.adJList.get(v2)?.push(v1)
    }
    traverse () {
        console.log("Graph");
        this.verteces.forEach(vertex => {
            const edges = this.adJList.get(vertex)
            console.log(`${vertex}->${edges?.join(" ")}`);

        })
    }
    bfs () {
        //1.判断是否有顶点
        if (this.verteces.length === 0) return

        //2.创建队列结构访问每一个顶点
        const queue: T[] = []
        queue.push(this.verteces[0])
        //3.创建set结构，激励某一个顶点是否被访问过
        const visited = new Set<T>()
        visited.add(this.verteces[0])
        // 4.遍历队列中每一个顶i但
        while (queue.length) {
            const vertex = queue.shift()!
            console.log(vertex);


            //相邻的顶点
            const neighbors = this.adJList.get(vertex)
            if (!neighbors) continue
            for (const nei of neighbors) {
                if (!visited.has(nei)) {
                    visited.add(nei)
                    queue.push(nei)
                }
            }
        }



    }
    dfs () {
        //1.判断有没有顶点，没有就直接返回
        if (this.verteces.length === 0) return

        //2.创建栈结构
        const stack: T[] = []
        stack.push(this.verteces[0])
        //3.创建set结构
        const visited = new Set<T>()
        visited.add(this.verteces[0])
        //4.从第一个顶点开始访问
        while (stack.length) {
            const vertex = stack.pop()!
            console.log(vertex);
            const neighbors = this.adJList.get(vertex)
            if (!neighbors) continue
            for (let i = neighbors.length - 1; i >= 0; i--) {
                const nei = neighbors[i]
                if (!visited.has(nei)) {
                    visited.add(nei)
                    stack.push(nei)
                }

            }

        }
    }

}



const graph = new Graph()

graph.addVertex("A")
graph.addVertex("B")
graph.addVertex("C")
graph.addVertex("D")
graph.addVertex("E")
graph.addVertex("F")
graph.addVertex("G")
graph.addVertex("H")
graph.addVertex("I")

graph.addEdge("A", "B")
graph.addEdge("A", "C")
graph.addEdge("A", "D")
graph.addEdge("C", "D")
graph.addEdge("C", "G")
graph.addEdge("D", "G")
graph.addEdge("D", "H")
graph.addEdge("B", "E")
graph.addEdge("B", "F")
graph.addEdge("E", "I")

graph.traverse()
graph.bfs()
export { }