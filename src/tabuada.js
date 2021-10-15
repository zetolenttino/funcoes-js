function tabuada(num, funcao) {
    let resultado = ''
    for (let i = 1; i <= 10; i++) {
        const linhaTabuada = funcao(num, i)
        resultado = `${resultado}\n${linhaTabuada}`
    }
    return resultado
}

module.exports = tabuada