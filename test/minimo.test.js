var minimo = require ('../src/minimo')

describe('minimo',()=>{

    it('minimo entre 1 e 5',()=>{
      expect(minimo([1,5])).toBe(1)
    })

    it('minimo com array vazio',()=>{
      expect(minimo([])).toBe(undefined)
    })

    it('minimo entre 1, 6, 7, 8, 67, 77, 54, 5, -3',()=>{
      expect(minimo([1, 6, 7, 8, 67, 77, 54, 5, -3])).toBe(-3)
    })
    
})
