function binarySearch (array: number[], num: number) {
    let left = 0
    let right = array.length - 1

    while (left <= right) {
        let mid = Math.floor((right + left) / 2)
        if (array[mid] === num) {
            return mid
        } else if (array[mid] < num) {
            left = mid + 1
        } else {
            right = mid - 1
        }
    }
    return -1
}

const index = binarySearch([1, 3, 5, 7, 9, 12, 15, 19, 30, 40, 62, 70, 81, 99], 30)
console.log(index);//8
export default binarySearch