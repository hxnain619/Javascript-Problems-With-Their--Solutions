function findIndices(arr, target) {
    // write code
    let result = []
    for (let i = 0; i < arr.length; i++) {
        if ((arr[i] + arr[i + 1]) == target) {
            result.push(i, i + 1)
        }
    }
    if (result.length == 0) {
        return null
    }
    return result;
}
let arr = [11, 19, 78]
console.log(findIndices(arr, 8))