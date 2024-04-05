const {verificar_si_es_vocal, multiplica_dos_numeros_sin_usar_el_operador_matematico} = require('../ejercicios/ejercicios1');

describe('Verificar si es vocal', ()=>{
    it('Debe retornar true cuando sean vocales', ()=>{
        expect(verificar_si_es_vocal('a')).toBe(true)
    });
    it('Debe retornar falso cuando sean consonantes', ()=>{
        expect(verificar_si_es_vocal('c')).toBe(false)
    });
    it('Lo sentimos pero solo puedes ingresar letras', ()=>{
        expect(verificar_si_es_vocal(1)).toBe('Lo sentimos pero solo puedes ingresar letras')
    });
})

const originalMultiplicacion = multiplica_dos_numeros_sin_usar_el_operador_matematico.multiplicacion;
multiplica_dos_numeros_sin_usar_el_operador_matematico.multiplicacion = jest.fn((a, b) => {
  throw new Error('No se permite usar el operador *');
});

describe('Multiplica dos numeros sin usar el operador matematico', ()=>{
    it('No puede ingresar numeros con mas de 3 digitos', ()=>{
        expect(multiplica_dos_numeros_sin_usar_el_operador_matematico(1000, 1000)).toBe('No puede ingresar numeros con mas de 3 digitos')
    });
    it('No se permite usar el operador *', ()=>{
        expect(() => {
            multiplica_dos_numeros_sin_usar_el_operador_matematico.multiplicacion(2, 3);
          }).toThrow('No se permite usar el operador *');
    });
    it('Debería permitir la multiplicación original', ()=>{
        expect(multiplica_dos_numeros_sin_usar_el_operador_matematico(2,3)).toBe(6)
    });
})