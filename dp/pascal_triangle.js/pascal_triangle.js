
function pascal_triangle(rows) {
    cache = [[1]]

    for (let row = 1; row < rows; row++) {
        const prev = [0, ...cache[row - 1], 0]
        let next = []
        for (let col = 0; col <= row; col++) {
            next.push(prev[col] + prev[col + 1])
        }
        cache.push(next);
    }
    return cache
}

console.log(pascal_triangle(10));