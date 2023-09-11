//哈希函数
/**
 * 哈希函数，将key映射称index
 * @param key 转换的key
 * @param max 数组的长度（最大的数值）
 * @returns 索引值
 */
function hashFunc (key: string, max: number): number {
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
//测试哈希函数
//loadFactor=4/8=0.5
// console.log(hashFunc("qwe", 8));
// console.log(hashFunc("wer", 8));
// console.log(hashFunc("ert", 8));
// console.log(hashFunc("rty", 8));
//loadFactor=5/7 这个值太大就会产生冲突，一个数里放两个值，要用质素和扩容的方法来避免
console.log(hashFunc("qwe", 7));
console.log(hashFunc("wer", 7));
console.log(hashFunc("ert", 7));
console.log(hashFunc("rty", 7));
console.log(hashFunc("tyu", 7));

export default hashFunc