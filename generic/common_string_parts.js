// For strings x,y. Find the smallest string a, that can be concatenated some number of times to obtain both x and y.


// How to solve
// 1. find the Greatest Common Divisor of 2 string lengths, this will decrease the number of iterations of common string matching as GCD value will be the max length of the common string in any case.
// Now find the string value from 0 to gcd value, this will be the initial string match.
// now iterate from 1 to length of the while initial string match so that we will know the repitition


function gcd(a, b) {
    const reminder = a % b
    if (reminder === 0) {
        return b;
    }
    return gcd(b, reminder)
}

function find_smallest_repeating_string(x, y) {
    const length_of_x = x.length;
    const lenght_of_y = y.length;
    // potential longest repetitive string length
    const length_of_smallest_string = gcd(length_of_x, lenght_of_y);
    //  from the above length get the repetitive string by using either x or y as both are same to some extent.
    const string_val = y.substring(0, length_of_smallest_string)
    // function to check if the repetition of substring will be the actual string
    check_if_string_is_right = (s, sub_string) => s === sub_string.repeat(s.length / sub_string.length)
    //  now loop through the potential repetitive string and check if part of the potential string is the actual repetitive string
    //  we achieve this by finding the substring of potential string and check that substring when repeated is the right one.
    for (let i = 1; i <= length_of_smallest_string; i++) {
        if (length_of_smallest_string % i === 0) {
            const sub_string = string_val.substring(0, i);
            if (check_if_string_is_right(x, sub_string) && check_if_string_is_right(y, sub_string)) {
                return i;
            }
        }
    }
    return -1
}


// Example usage
const y = 'terterterter';
const z = 'terterter';
console.log(find_smallest_repeating_string(y, z));  // Output: 3