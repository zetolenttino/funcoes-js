
var mochila = require ('../src/mochila')

describe('mochila',()=>{

    var mochilaDoZe = {equipamentos:['mapa','bussola','corda']}

    it('procurando um equipamento que exste na mochila',()=>{
      expect(mochila.procurarNaMochila (mochilaDoZe, 'corda')).toBe(true)
    })
    
    it('procurando um equipamento que nao exste na mochila',()=>{
      expect(mochila.procurarNaMochila (mochilaDoZe, 'canivete')).toBe(false)
    })

})
