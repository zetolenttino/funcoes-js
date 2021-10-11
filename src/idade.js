function idade(anoDeNascimento) {
    
    const anoAtual = new Date ().getFullYear()
    const idade = anoAtual-anoDeNascimento  
    return idade
}

module.exports=idade