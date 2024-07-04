
function minAbsoluteDifference(arr) {
    let diff = Number.POSITIVE_INFINITY
    let diffItems = []
    arr.sort() // sort array in place
    for (let i = 0; i < arr.length - 1; i++) {
        const currentDiff = Math.abs(arr[i + 1] - arr[i])


        if (currentDiff === diff) {
            diffItems.push(arr[i + 1] + ' ' + arr[i])
        }
        if (currentDiff < diff) {
            diff = currentDiff
            diffItems = [arr[i + 1] + ' ' + arr[i]]
        }
    }
    console.log(diff)
    diffItems.forEach(element => {
        console.log(element)
    });
}

const inputArray = [6, 2, 4, 10, -9, -8];
minAbsoluteDifference(inputArray)
// const inputArray2 = [4, 2, 1, 3];
// minAbsoluteDifference(inputArray2)
// const inputArray3 = [1, 5, 3, 19, 18, 25];
// minAbsoluteDifference(inputArray3)