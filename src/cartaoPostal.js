
function cabeNoCartao(message) {
    if (message.length <= 80) {
        return "Mensagem cabe no cartão"
    } else {
        return "Mensagem não cabe no cartão"
    }
}

module.exports = {
    cabeNoCartao
}