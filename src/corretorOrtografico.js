// function corretorOrtografico(texto, palavraErrada, palavraCerta) {
const corretorOrtografico = (texto, palavraErrada, palavraCerta) => {
    if (texto.includes(palavraErrada) === false) {
        return texto
    }

    texto = texto.replace(palavraErrada, palavraCerta)
    return corretorOrtografico(texto, palavraErrada, palavraCerta)
}

module.exports = corretorOrtografico