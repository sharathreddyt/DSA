
function knapsack(capacity, weights, profits) {
    const n = weights.length; // find the number of weights to calclate the number of rows.

    if (n === 0 || capacity === 0) {
        throw Error("Invalid arguments")
    }

    const DP = new Array(n + 1).fill(0).map(each => new Array(capacity + 1).fill(0))

    for (let i = 1; i <= n; i++) {
        for (let w = 1; w <= capacity; w++) {
            DP[i][w] = profits[i - 1]
            const weight = weights[i - 1] // current object weight
            const profit = profits[i - 1] // current object profit

            if (w < weight) {
                DP[i][w] = DP[i - 1][w]
            } else {
                const currentCellProfitValue = profit + DP[i - 1][w - weight]
                DP[i][w] = Math.max(DP[i - 1][w], currentCellProfitValue)
            }
        }
    }
    console.table(DP)
    return DP[n][capacity]
}


function knapsack_recursion(capacity, weights, profits) {
    const n = weights.length; // find the number of weights to calclate the number of rows.

    if (n === 0 || capacity === 0) {
        throw Error("Invalid arguments")
    }

    const DP = new Array(n + 1).fill(0).map(each => new Array(capacity + 1).fill(0))

    for (let i = 1; i <= n; i++) {
        for (let w = 1; w <= capacity; w++) {
            DP[i][w] = profits[i - 1]
            const weight = weights[i - 1] // current object weight
            const profit = profits[i - 1] // current object profit

            if (w < weight) {
                DP[i][w] = DP[i - 1][w]
            } else {
                const currentCellProfitValue = profit + DP[i - 1][w - weight]
                DP[i][w] = Math.max(DP[i - 1][w], currentCellProfitValue)
            }
        }
    }
    console.table(DP)
    return DP[n][capacity]
}


const result = knapsack(7, [3, 1, 3, 4, 2], [2, 2, 4, 5, 3])

console.table(result)