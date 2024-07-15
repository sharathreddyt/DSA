// https://www.geeksforgeeks.org/minimum-length-subarray-sum-greater-given-value/

// Given an array arr[] of integers and a number x, the task is to find the smallest subarray with a sum greater than the given value. 

const ar = [1, 4, 45, 6, 0, 19]
const x = 51

function min_subarray(array, threshold) {

    const length = array.length
    let sub_array_length = length + 1
    let subarray = []
    for (let start = 0; start < length; start++) {
        let sum = 0;
        for (let end = start; end < length; end++) {
            sum += array[end];
            if (sum > threshold && end - start + 1 < sub_array_length) {
                sub_array_length = Math.min(sub_array_length, end - start + 1)
                subarray = array.slice(start, end + 1)
                break;
            }
        }
    }
    console.log(subarray);
    return sub_array_length > length ? 0 : sub_array_length
}



console.log(min_subarray(ar, x))
console.log(min_subarray([1, 11, 100, 1, 0, 200, 3, 2, 1, 250], 280))
console.log(min_subarray([10], 9))
console.log(min_subarray([1, 2, 4], 8))

console.log("=============================================");

// sliding window approach


function min_subarray_sliding(array, threshold) {
    const length = array.length;
    let start = 0
    let end = 0
    let min_length = array.length + 1
    let sub_array = []
    let sum = 0

    while (end < length) {
        if (sum > threshold && end - start + 1 < min_length) {
            min_length = end - start - 1
            sub_array = array.slice(start, end + 1)
            sum = sum - array[start]
            start++

        }
        else {
            sum += array[end]
            end++
        }
    }
    console.log(sub_array)
    return min_length > length ? 0 : min_length
}
console.log(min_subarray_sliding(ar, x))
console.log(min_subarray_sliding([1, 11, 100, 1, 0, 200, 3, 2, 1, 250], 280))
console.log(min_subarray_sliding([10], 9))
console.log(min_subarray_sliding([1, 2, 4], 8))