function bubble(input) {
    const length = input.length - 1;
    let sorted = input;
    for (let i = 0; i < length; i++) {
        let swapped = false;
        for (let j = 0; j < length; j++) {
            if (sorted[j] > sorted[j + 1]) {
                let temp = sorted[j]
                sorted[j] = sorted[j + 1]
                sorted[j + 1] = temp
                swapped = true
            }
        }
        if (swapped === false) {
            break;
        }
    }
    return input
}

const sorted = bubble([33, 7, 12, 9, 11, 3])

console.log(sorted)