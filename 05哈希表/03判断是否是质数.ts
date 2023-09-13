/**
 * 传入一个数字，判断是否是质数
 * @param number 要判断是数字
 * @returns 是否是一个质数
 */
function isPrime (number: number): boolean {
    if (number === 1) return false
    for (let i = 2; i < number; i++) {
        if (number % i == 0) {
            return false
        }
    }
    return true
}
console.log(isPrime(3));
console.log(isPrime(7));
console.log(isPrime(8));
console.log(isPrime(11));
console.log(isPrime(13));
console.log(isPrime(15));

export default isPrime