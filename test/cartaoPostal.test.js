
var cartaoPostal = require ('../src/cartaoPostal')

describe('cartaoPostal',()=>{

    it('Mensagem cabe no cartao', () => {
        expect(cartaoPostal.cabeNoCartao('Saudação de Goiânia')).toBe('Mensagem cabe no cartão')
    })

    it('Mensagem muito grande para o cartao', () => {
        expect(cartaoPostal.cabeNoCartao('Saudação de Goiânia, estou aqui na pecuãria e lembrei de você quando o berrante tocou e tinha um monte de gente bebendo cerveja e cantando mũsica sertaneja'))
          .toBe("Mensagem não cabe no cartão")
    })

})