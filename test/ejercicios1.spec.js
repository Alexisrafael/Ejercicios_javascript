const {verificar_si_es_vocal, entrar_en_la_discoteca, multiplica_dos_numeros_sin_usar_el_operador_matematico} = require('../ejercicios/ejercicios1');

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

describe('Verificar la edades de las personas que entra en la discoteca', ()=>{
    it('No pueden ingreasar si son menores de edad', () => {
        expect(entrar_en_la_discoteca(15)).toBe('No puedes ingresar a la discoteca')
    });

    it('Si tienen entre 18 y 55 años puede ingresar', ()=>{
        expect(entrar_en_la_discoteca(18)).toBe('Puedes ingresar a las discoteca')
    });

    it('Si es mayor a 55 años ', ()=>{
        expect(entrar_en_la_discoteca(60)).toBe('fiesta privada')
    });
})

describe('Multiplica dos numeros sin usar el operador matematico', ()=>{
    it('No debe usar el operador matematico', () => {
        const funcString = multiplica_dos_numeros_sin_usar_el_operador_matematico.toString();
        const usesMathOperator = funcString.includes('*');
        expect(usesMathOperator).toBe(false);
    });

    it('No puede ingresar numeros con mas de 3 digitos', ()=>{
        expect(multiplica_dos_numeros_sin_usar_el_operador_matematico(1000, 1000)).toBe('No puede ingresar numeros con mas de 3 digitos')
    });

    it('Debería permitir la multiplicación original', ()=>{
        expect(multiplica_dos_numeros_sin_usar_el_operador_matematico(2,3)).toBe(6)
    });
})