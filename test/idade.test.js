const { expect } = require('@jest/globals')
var idade = require('../src/idade')

describe('idade', ()=>{

    it("ze", ()=>{
        expect(idade(1998)).toBe(23)
    })

    it("Fernando", ()=>{
        expect(idade(1975)).toBe(46)
    })
})