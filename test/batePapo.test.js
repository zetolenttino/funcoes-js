var batePapo = require('../src/batePapo')

describe('batePapo', () => {

    it('ola, tudo bem?', () => {
        expect(batePapo('ola')).toBe('ola, tudo bem?')
    })
    it('tchau', () => {
        expect(batePapo('vou indo, tchau')).toBe('tchau, boa viagem')
    })
})