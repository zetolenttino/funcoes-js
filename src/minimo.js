
function minimo(array) {
    let min = undefined
    for (let num of array) {
        if (min === undefined) {
          min = num   
        } else {
          min = min < num ? min : num
        }
    }
    return min
}

module.exports = minimo