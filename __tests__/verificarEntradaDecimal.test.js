import verificarEntradaDecimal from '../src/verificarEntradaDecimal.js';

describe('verificarEntradaDecimal', () => {

  describe('Casos de éxito', () => {
    test('debe devolver el número 1 para el string "1"', () => {
      expect(verificarEntradaDecimal("1")).toBe(1);
    });

    test('debe devolver el número 3999 para el string "3999"', () => {
      expect(verificarEntradaDecimal("3999")).toBe(3999);
    });

    test('debe devolver 1994 para "1994"', () => {
      expect(verificarEntradaDecimal("1994")).toBe(1994);
    });
  });

  describe('Casos de error', () => {
    
    test('debe lanzar error si no es un número (ej: "hola")', () => {
      expect(() => {
        verificarEntradaDecimal("hola");
      }).toThrow("Numero ingresado Incorecto, debe ser un numero en sistema decimal");
    });

    test('debe lanzar error si no es un número (ej: "12A")', () => {
        expect(() => {
          verificarEntradaDecimal("12A");
        }).toThrow("Numero ingresado Incorecto, debe ser un numero en sistema decimal");
      });

    test('debe lanzar error si el número es 0', () => {
      expect(() => {
        verificarEntradaDecimal("0");
      }).toThrow("Numero ingresado Incorecto, debe ser un numero entre 1 y 3999");
    });

    test('debe lanzar error si el número es negativo', () => {
        expect(() => {
          verificarEntradaDecimal("-10");
        }).toThrow("Numero ingresado Incorecto, debe ser un numero entre 1 y 3999");
      });

    test('debe lanzar error si el número es 4000', () => {
      expect(() => {
        verificarEntradaDecimal("4000");
      }).toThrow("Numero ingresado Incorecto, debe ser un numero entre 1 y 3999");
    });

    test('debe lanzar error si el número es flotante (ej: "10.5")', () => {
        expect(() => {
          verificarEntradaDecimal("10.5");
        }).toThrow("Numero ingresado Incorecto, el numero debe ser un entero");
    });
   
  });
});