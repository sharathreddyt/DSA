// https://www.geeksforgeeks.org/window-sliding-technique/

let ar = [1, 4, 2, 10, 2, 3, 1, 0, 20];
let k = 4;
// Brute force solution
function max_sum(arr, window) {
    const lengthOfArray = arr.length
    let sum = 0;
    for (let i = 0; i < lengthOfArray - k + 1; i++) {
        let currentSum = 0;
        for (let s = 0; s < window; s++) {
            currentSum += arr[i + s]
        }
        sum = Math.max(sum, currentSum)
    }
    return sum
}

console.log(max_sum(ar, k))


// Sliding window approach

function max_sum_sliding(arr, window) {
    const lengthOfArray = arr.length
    let max_sum = sum = 0;
    for (let i = 0; i < k; i++) {
        sum += arr[i]
        max_sum = sum
    }
    for (i = k; i < lengthOfArray; i++) {
        sum += arr[i] - arr[i - window]
        if (sum > max_sum) {
            max_sum = sum
        }
    }
    return sum;
}

console.log(max_sum_sliding(ar, k))
