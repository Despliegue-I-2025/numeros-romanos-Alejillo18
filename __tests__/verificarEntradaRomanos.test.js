import verificarEntradaRomanos from '../src/verificarEntradaRomanos.js';

describe('verificarEntradaRomanos', () => {

  // --- Casos de Éxito ---
  describe('Casos de éxito', () => {
    test('debe devolver un array de caracteres para un string válido', () => {
      const input = "MCMXCIV";
      const expected = ['M', 'C', 'M', 'X', 'C', 'I', 'V'];
      expect(verificarEntradaRomanos(input)).toEqual(expected);
    });

    test('debe funcionar con un solo caracter', () => {
      expect(verificarEntradaRomanos("V")).toEqual(['V']);
    });
  });

  // --- Casos de Error (Inputs Inválidos) ---
  describe('Casos de error (lanzar Error)', () => {
    
    test('debe lanzar un error si el string está vacío', () => {
      expect(() => {
        verificarEntradaRomanos("");
      }).toThrow("Numero ingresado incorrecto");
    });

    test('debe lanzar un error si el input no es un string (null)', () => {
      expect(() => {
        verificarEntradaRomanos(null);
      }).toThrow("Numero ingresado incorrecto");
    });

    test('debe lanzar un error si el input no es un string (number)', () => {
      expect(() => {
        verificarEntradaRomanos(1994);
      }).toThrow("Numero ingresado incorrecto");
    });

    test('debe lanzar un error si el input no es un string (undefined)', () => {
      expect(() => {
        verificarEntradaRomanos(undefined);
      }).toThrow("Numero ingresado incorrecto");
    });

    test('debe lanzar un error si el input es un array', () => {
        expect(() => {
          verificarEntradaRomanos(['M']);
        }).toThrow("Numero ingresado incorrecto");
      });
    
    test('debe lanzar un error si el input es un objeto', () => {
        expect(() => {
          verificarEntradaRomanos({a: 1});
        }).toThrow("Numero ingresado incorrecto");
      });

    // --- Casos de Error (Contenido Inválido) ---
    test('debe lanzar un error si contiene caracteres inválidos', () => {
      expect(() => {
        verificarEntradaRomanos("MCMA"); // 'A' es inválido
      }).toThrow("Numero ingresado incorrecto");
    });

    test('debe lanzar un error si contiene minúsculas', () => {
        expect(() => {
          verificarEntradaRomanos("mm"); // 'm' es inválido
        }).toThrow("Numero ingresado incorrecto");
      });

    test('debe lanzar un error si contiene números (como string)', () => {
      expect(() => {
        verificarEntradaRomanos("MCM10"); // '1' y '0' son inválidos
      }).toThrow("Numero ingresado incorrecto");
    });

    test('debe lanzar un error si contiene espacios', () => {
      expect(() => {
        verificarEntradaRomanos("M CM"); // ' ' es inválido
      }).toThrow("Numero ingresado incorrecto");
    });
  });
});