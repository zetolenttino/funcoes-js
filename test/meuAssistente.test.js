const meuAssistente = require('../src/meuAssistente')

describe(meuAssistente, () => {

  it('Definindo horários dos compromissos', () => {
    expect(meuAssistente('Olá, sou o seu assistente pessoal', () => 'Sua acadeia está marcada para 18h'))
      .toBe('Olá, sou o seu assistente pessoal Sua acadeia está marcada para 18h')
  })

  it('Definindo horários dos compromissos', () => {
    expect(meuAssistente('Olá, sou o seu assistente pessoal', () => 'Você será padrinho de um casamento hoje as 20h'))
      .toBe('Olá, sou o seu assistente pessoal Você será padrinho de um casamento hoje as 20h')
  })

  it('Definindo horário dos compromissos', () => {
    expect(meuAssistente('Olá, sou o seu assistente pessoal', () => 'Não se esqueça de jogar o lixo fora'))
      .toBe('Olá, sou o seu assistente pessoal Não se esqueça de jogar o lixo fora')
  })
})