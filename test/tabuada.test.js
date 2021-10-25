const tabuada = require('../src/tabuada')

describe('tabuada', () => {
    it('tabuada de soma do numero 5', () => {
        expect(tabuada(5, function (a, b) {
            return a + b
        })).toMatchSnapshot()
    })
    it('tabuada de multiplicação do numero 5', () => {
        expect(tabuada(5, function (a, b) {
            return a * b
        })).toMatchSnapshot()
    })
})

/*

arraw function - flecha - lambda
    (a,b) => a+b

    anonymous function - função sem nome

function (a,b) {
    return a+b
}

*/