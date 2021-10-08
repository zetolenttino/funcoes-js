function procurarNaMochila (mochila, equipamentoNecessario) {
    for (var elemento of mochila.equipamentos) {
        if (elemento === equipamentoNecessario)
            return true 
    }
    return false
}

module.exports = {
    procurarNaMochila
}