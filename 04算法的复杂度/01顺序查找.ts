
/**
 * 顺序查找的算法
 * @param array 要查找的数组
 * @param num 要查找的数据
 * @returns 查找到的索引，未找到返回-1
 */
function sequentSearch (array: number[], num: number) {
    for (let i = 0; i < Array.length; i++) {
        if (array[i] == num) {
            return i
        }
    }
    return -1
}

sequentSearch([123, 456, 789, 564, 321, 12, 65], 12)

export default sequentSearch