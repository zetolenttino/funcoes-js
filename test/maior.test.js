var maior = require('../src/maior')

describe('maior', ()=>{
    
    it('numero maior', ()=>{
        expect(maior(94, 3, 46, 54, 86, 20)).toBe(94)
    })
})