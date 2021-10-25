import { programarAlarme, aberto, fechado } from ' programarAlarme, aberto, fechado '

describe(programarAlarme, aberto, fechado, () => {
    it('Horários disponíveis no cabelereiro', () => {
        expect(aberto, fechado('Temos horário disponível para ás 8h!', () => 'A partir das 22h estamos fechados!'))
            .toBe('Temos horário disponível para ás 8h! A partir das 22h estamos fechados!')
    })
})