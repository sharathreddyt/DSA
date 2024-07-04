function fibonacci_brute_force(n) {
    if (n < 2) {
        return n
    }
    return fibonacci_brute_force(n - 1) + fibonacci_brute_force(n - 2)
}


function fibonacci_dp(n) {
    let cache = {}

    if (cache[n]) {
        return cache[n];
    }
    else {
        const result = fibonacci_brute_force(n);
        cache[n] = result
        return result
    }

}

function fibonacci_dp_cache_as_argument(n, cache = {}) {
    if (cache[n]) {
        return cache[n]
    } else if (n < 2) { return n }
    else {
        return fibonacci_dp_cache_as_argument(n - 1, cache) + fibonacci_dp_cache_as_argument(n - 2, cache)
    }
}


console.time("brute force")
console.log(fibonacci_brute_force(7));
console.timeEnd("brute force")
console.time("DP")
console.log(fibonacci_dp(7));
console.timeEnd("DP")
console.time("DP with cache as argument")
console.log(fibonacci_dp_cache_as_argument(7));
console.timeEnd("DP with cache as argument")

