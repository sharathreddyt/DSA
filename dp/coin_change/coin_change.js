// Given an amount and the denominations of coins available, determine how many ways change can be made for amount.
// There is a limitless supply of each coin type.


// Solution:
// Break down into subproblems, In this problem we need to find out the number of ways change can be made from 0 to amount; 
// for example, if n = 10, we need to calculate for n=10, n=9, n=8, and so on till n=1, n=0

// ┌─────────┬───┬───┬───┬───┬───┬───┬───┬───┬───┬───┬────┐
// │ (index) │ 0 │ 1 │ 2 │ 3 │ 4 │ 5 │ 6 │ 7 │ 8 │ 9 │ 10 │
// ├─────────┼───┼───┼───┼───┼───┼───┼───┼───┼───┼───┼────┤
// │ 0       │ 0 │ 0 │ 0 │ 0 │ 0 │ 0 │ 0 │ 0 │ 0 │ 0 │ 0  │
// │ 1       │ 0 │ 0 │ 1 │ 0 │ 1 │ 0 │ 1 │ 0 │ 1 │ 0 │ 1  │
// │ 2       │ 0 │ 0 │ 1 │ 0 │ 1 │ 1 │ 1 │ 1 │ 1 │ 1 │ 2  │
// │ 3       │ 0 │ 0 │ 1 │ 1 │ 1 │ 2 │ 2 │ 2 │ 3 │ 3 │ 4  │
// │ 4       │ 0 │ 0 │ 1 │ 1 │ 1 │ 2 │ 3 │ 2 │ 4 │ 4 │ 5  │
// └─────────┴───┴───┴───┴───┴───┴───┴───┴───┴───┴───┴────┘

function coin_change_different_ways(sum, denominations) {
    const number_of_denominations = denominations.length

    let cache = new Array(number_of_denominations + 1).fill(0).map(each => new Array(sum + 1).fill(0))

    for (let d = 1; d <= number_of_denominations; d++) {
        for (let s = 1; s <= sum; s++) {
            const current_denomination = denominations[d - 1]
            if (s < current_denomination) {
                cache[d][s] = cache[d - 1][s]
            } else {
                const is_sum_equals_denomination = s === current_denomination
                cache[d][s] = (is_sum_equals_denomination ? 1 : cache[d][s - current_denomination]) + cache[d - 1][s]
            }
        }
    }
    console.table(cache)

    return cache

}


//  make change for 10 units using coins with values given by: [2,5,3,6]
const result = coin_change_different_ways(10, [2, 5, 3, 6])

// console.log(result);