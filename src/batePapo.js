function batePapo(mensagem) {

    if (mensagem.includes('ola')) {
        return "ola, tudo bem?"
    } else if (mensagem.includes('tchau')) {
        return "tchau, boa viagem"
    }
}
 
module.exports = batePapo
    