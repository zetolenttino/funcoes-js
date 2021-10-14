var correio = require ('../src/correio')

describe('correio - aprendendo sobre recursividade', ()=>{
    
    it('exemplo com 3 cartões postais!', ()=>{
        expect(correio(3)).toMatchSnapshot()
    })

    it('exemplo com 2 cartões postais!', ()=>{
        expect(correio(2)).toMatchSnapshot()
    })

    it('exemplo com 200 cartões postais!', ()=>{
        expect(correio(200)).toMatchSnapshot()
    })

    it('exemplo sem cartões postais!', ()=>{
        expect(correio(0)).toMatchSnapshot()
    })

})