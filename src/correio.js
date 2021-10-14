function correio(quantia) {
    if (quantia < 1 )
        return
    // let log = '\ncartão postal ' + quantia + ' enviado com sucesso!'
    let log = `\ncartão postal ${quantia} enviado com sucesso!`
    if (quantia === 1) {
        log = log + '\ntodos os cartões foram enviados'
        return log
    } else {
        let montanteRestante = quantia - 1
        log = log + '\nchamando função novamente'
        const logRecursivo = correio(montanteRestante)
        return log + logRecursivo
    }
}

module.exports = correio