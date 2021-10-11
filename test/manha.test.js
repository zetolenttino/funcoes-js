var manha = require('../src/manha')

describe('manha', ()=>{

    it('vagando sem pressa pela manha', () => {
        expect(manha('manha')).toBe('noite')
    })
})