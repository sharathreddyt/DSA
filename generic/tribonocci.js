function tribonocci_brute_force(n) {
    let T0 = 0;
    let T1 = 1;
    let T2 = 1;

    if (n === 0) return T0;
    if (n < 3) return 1;

    for (let i = 3; i <= n; i++) {

        const result = T0 + T1 + T2;

        T0 = T1;
        T1 = T2;
        T2 = result
    }
    return T2;
}

// this take more time because it calculates repetitively
function tribonocci_recursion(n) {
    if (n === 0) return 0;
    if (n < 3) return 1;
    return tribonocci_recursion(n - 1) + tribonocci_recursion(n - 2) + tribonocci_recursion(n - 3)
}

// this caches previous values
function tribonocci_recursion_with_cache(n, cache = {}) {
    if (cache[n]) {
        return cache[n]
    }
    if (n === 0) return 0;
    if (n < 3) return 1;
    cache[n] = tribonocci_recursion_with_cache(n - 1, cache) + tribonocci_recursion_with_cache(n - 2, cache) + tribonocci_recursion_with_cache(n - 3, cache)
    return cache[n]
}

console.time("tribonocci_brute_force")
console.log("tribonocci value of 25 is ", tribonocci_brute_force(25));
console.timeEnd("tribonocci_brute_force")

console.time("tribonocci_recursion")
console.log("tribonocci recrusive value of 25 is ", tribonocci_recursion(25));
console.timeEnd("tribonocci_recursion")

console.time("tribonocci_recursion_with_cache")
console.log("tribonocci recrusive with cache value of 25 is ", tribonocci_recursion_with_cache(25));
console.timeEnd("tribonocci_recursion_with_cache")


console.table([[1], [1, 1]])
