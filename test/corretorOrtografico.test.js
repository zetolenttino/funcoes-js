const { expect, it } = require('@jest/globals')
var corretorOrtografico = require('../src/corretorOrtografico')

describe('correção de recursividade, corrigindo erros de string', () => {

    it('Corrigindo viagem com j para viagem com g', () => {
        expect(corretorOrtografico('olá gafanhoto, sobre sua viajem para Costa Rica. Boa viajem', 'viajem', 'viagem'))
            .toBe('olá gafanhoto, sobre sua viagem para Costa Rica. Boa viagem')
    })

    it('Corrigindo vc por você', ()=>{
        expect(corretorOrtografico('oi como vai vc. Estou querendo falar com vc', 'vc', 'você'))
            .toBe('oi como vai você. Estou querendo falar com você')
    })

    it('Corrigindo joséfersdr por José', ()=>{
        expect(corretorOrtografico('Meu nome é joséfersdr, qual o seu?', 'joséfersdr', 'José'))
            .toBe('Meu nome é José, qual o seu?')
    })
})
