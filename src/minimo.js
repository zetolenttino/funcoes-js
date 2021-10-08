
function minimo(a,b) {
    if (typeof a === 'number') {
        if (a < b) {
            return a
        } else {
            return b
        }
    }
}
module.exports = minimo