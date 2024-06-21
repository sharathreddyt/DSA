
// Brute force solution
function gcd_brute_force(a, b) {

    if (a === 0) {
        return b
    }
    if (b === 0) {
        return a
    }

    let gcd = 1; // 1 is the defacto common divisor for all numbers

    // loop through from 1 to lowest value of a and b
    for (let i = 1; i < a && i < b; i++) {
        if (a % i === 0 && b % i === 0) {
            gcd = i
        }
    }
    return gcd;

}

console.log("GCD of 15, 12 is: ", gcd_brute_force(15, 12))
console.log("GCD of 54, 24 is: ", gcd_brute_force(54, 24))
console.log("GCD of 1386, 3213 is: ", gcd_brute_force(1386, 3213))

function gcd_euclid(a, b) {
    let a1 = a
    let b1 = b

    while (true) {
        const reminder = b1 % a1;
        if (reminder === 0) {
            return a1;
        }
        a1 = reminder;
        b1 = a;
    }
}


console.log("GCD of 15, 12 using eucledean is: ", gcd_euclid(15, 12))
console.log("GCD of 54, 24 eucledean is: ", gcd_euclid(54, 24))
console.log("GCD of 1386, 3213 eucledean is: ", gcd_euclid(1386, 3213))


function gcd_euclid_recursion(a, b) {
    const reminder = a % b;
    if (reminder === 0) {
        return b;
    }
    return gcd_euclid_recursion(b, reminder)
}

console.log("GCD of 15, 12 using eucledean recursion is: ", gcd_euclid_recursion(15, 12))
console.log("GCD of 54, 24 eucledean recursion is: ", gcd_euclid_recursion(54, 24))
console.log("GCD of 1386, 3213 eucledean recursion is: ", gcd_euclid_recursion(1386, 3213))


function gcd_euclid_recursion_array(...items) {
    return items.reduce((acc, current) => {
        return gcd_euclid_recursion(acc, current)
    })
}
