function triangle_with_asterisk(rows) {

    const columns = 2 * rows + 1;

    for (let row = 0; row < rows; row++) {
        let printString = ""
        for (let column = 0; column < columns; column++) {
            const median = Math.floor(columns / 2)
            if (column < median - row || column > median + row) {
                printString += " "
            }
            else {
                printString += "*"
            }
        }
        console.log(printString)
    }

}
triangle_with_asterisk(10)