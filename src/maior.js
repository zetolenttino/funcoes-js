function maior(a, b) {
    return a > b ? a : b
}

function maximo(array) {
    let max = 0
    for (let num of array) {
        max = maior(max, num)
    }
    return max
}

module.exports = maior