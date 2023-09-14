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

export { }