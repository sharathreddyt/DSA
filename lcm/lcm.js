
// brute force solution
function lcm_brute_force(a, b) {
    let greatest = a > b ? a : b
    while (true) {
        if (greatest % a === 0 && greatest % b === 0) {
            return greatest
        }
        greatest++;
    }
}

// brute force optimized with greatest increment
function lcm_brute_force_optimized(a, b) {
    let [greatest, smallest] = a > b ? [a, b] : [b, a]
    for (let i = greatest; i <= a * b; i += greatest) {
        if (i % smallest === 0) {
            return i
        }
    }
}
console.log("LCM of 5, 7 is: ", lcm_brute_force_optimized(5, 7));
