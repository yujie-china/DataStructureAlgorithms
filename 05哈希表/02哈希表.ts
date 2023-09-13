class HashTable<T = any> {
    //创建一个数组，用来存放链地址中的链（数组）
    storage: [string, T][][] = [];
    //定义数组的长度
    private length: number = 7
    //记录已经存放元素的个数
    private count: number = 0

    /**
     * 哈希函数，将key映射称index
     * @param key 转换的key
     * @param max 数组的长度（最大的数值）
     * @returns 索引值
     */
    private hashFunc (key: string, max: number): number {
        //1.计算hashCode cats=>60337（27为底的时候）
        let hashCode = 0
        const length = key.length
        for (let i = 0; i < length; i++) {
            //霍纳法则计算hashCode
            //charCode(i)是拿到i位置的code值
            hashCode = 31 * hashCode + key.charCodeAt(i)
        }
        //求出索引值
        const index = hashCode % max
        return index
    }
    /**
     * 传入一个数字，判断是否是质数
     * @param number 要判断是数字
     * @returns 是否是一个质数
     */
    isPrime (number: number): boolean {
        if (number === 1) return false
        for (let i = 2; i < number; i++) {
            if (number % i == 0) {
                return false
            }
        }
        return true
    }
    /**
     * 传入新的质数
     * @param number 传入的数字
     * @returns 返回新的质数
     */
    private getNextPrime (number: number): number {
        let newPrime = number
        while (!this.isPrime(number)) {
            newPrime++
        }
        return newPrime
    }


    //扩容或者缩容操作
    private resize (newLength: number) {
        //判断newlength是否是质数
        this.length = this.getNextPrime(newLength)
        //设置新长度
        //获取原来所有的数据，并且重新放人到新的容量数组中
        //1.对数据今昔初始化
        const oldStorage = this.storage
        this.storage = []
        this.count = 0
        // 2.获取原来数据，放入新扩容的数组中
        oldStorage.forEach(bucket => {
            if (!bucket) return
            for (let i = 0; i < bucket.length; i++) {
                const tuple = bucket[i]
                this.put(tuple[0], tuple[1])
            }
        })
    }

    //插入/修改
    put (key: string, value: T) {
        //1.根据key获取数组中对应的索引值
        const index = this.hashFunc(key, this.length)
        //2.取出索引值对应位置的数组（桶）
        let bucket = this.storage[index]
        // 3.判断bucket是否有值
        if (!bucket) {
            bucket = []
            this.storage[index] = bucket
        }
        //4.确定已经有了一个数组，但是数组中是否已经存在key不确定
        let isUpdate = false
        for (let i = 0; i < bucket.length; i++) {
            const tuple = bucket[i]
            const tupleKey = tuple[0]
            if (tupleKey === key) {
                //修改/更新操作
                tuple[1] = value
                isUpdate = true
            }
        }
        //5.如果上面的代码没有进行覆盖，那么就在这里添加
        if (!isUpdate) {
            bucket.push([key, value])
            this.count++

            //发现loadFactor比例大于0.75就直接扩容
            const loadFactor = this.count / this.length
            if (loadFactor > 0.75) {
                this.resize(this.length * 2)

            }
        }
    }
    //用key来获取对应的value值
    get (key: string): T | undefined {
        //1.获取key通过哈希函数生成对应的index
        const index = this.hashFunc(key, this.length)
        // 2.获取bucket,就是数组里面的数组
        const bucket = this.storage[index]
        if (bucket === undefined) return undefined
        //3.对bucket遍历
        for (let i = 0; i < bucket.length; i++) {
            const tuple = bucket[i]
            const tupleKey = tuple[0]
            const tupleValue = tuple[1]
            if (tupleKey === key) {
                //
                return tupleValue
            }
        }
        return undefined
    }

    // 删除操作
    delete (key: string): T | undefined {
        //1.获取key通过哈希函数生成对应的index
        const index = this.hashFunc(key, this.length)
        // 2.获取bucket,就是数组里面的数组
        const bucket = this.storage[index]
        if (bucket === undefined) return undefined
        //3.对bucket遍历
        for (let i = 0; i < bucket.length; i++) {
            const tuple = bucket[i]
            const tupleKey = tuple[0]
            const tupleValue = tuple[1]
            if (tupleKey === key) {
                //从i的位置删除一个
                bucket.splice(i, 1)
                this.count--

                //发现loadFactor比例小于0.25就直接扩容
                const loadFactor = this.count / this.length
                if (loadFactor < 0.25 && this.length > 7) {
                    this.resize(Math.floor(this.length / 2))
                }
                return tupleValue
            }
        }
        return undefined
    }
}

const hashTable = new HashTable();
hashTable.put("aaa", 100)
hashTable.put("ccc", 200)
hashTable.put("ddd", 300)
hashTable.put("eee", 400)
// hashTable.put("fff", 500)
// hashTable.put("ggg", 500)
// hashTable.put("hhh", 500)
// hashTable.put("jhg", 500)
// hashTable.put("sadf", 500)


console.log(hashTable.storage);




export default HashTable
