import convertirARomano from '../src/convertirARomano.js';

// Helper para convertir string a array
const strToArray = (str) => Array.from(str);

describe('convertirARomano', () => {

  // --- Casos de Conversión Válida ---
  describe('Casos de conversión válida', () => {
    test('debe convertir números simples (solo suma)', () => {
      expect(convertirARomano(strToArray("I"))).toBe(1);
      expect(convertirARomano(strToArray("VI"))).toBe(6);
      expect(convertirARomano(strToArray("MDCLXVI"))).toBe(1666);
    });

    test('debe convertir números con resta (válida)', () => {
      expect(convertirARomano(strToArray("IV"))).toBe(4);
      expect(convertirARomano(strToArray("IX"))).toBe(9);
      expect(convertirARomano(strToArray("XL"))).toBe(40);
      expect(convertirARomano(strToArray("XC"))).toBe(90);
      expect(convertirARomano(strToArray("CD"))).toBe(400);
      expect(convertirARomano(strToArray("CM"))).toBe(900);
    });

    test('debe convertir números complejos (válidos)', () => {
      expect(convertirARomano(strToArray("MCMXCIV"))).toBe(1994);
      expect(convertirARomano(strToArray("CDXLIV"))).toBe(444);
    });
  });

  // --- NUEVO: Casos de Error (Restas Inválidas) ---
  describe('Casos de error (restas inválidas)', () => {

    // Regla: V, L, D no pueden restar
    test('debe lanzar error si "V" resta (ej: VX)', () => {
      expect(() => {
        convertirARomano(strToArray("VX")); // 5
      }).toThrow("Numero ingresado incorrecto: 'V' (V, L, D) no pueden restar.");
    });

    test('debe lanzar error si "L" resta (ej: LD)', () => {
      expect(() => {
        convertirARomano(strToArray("LD")); // 450
      }).toThrow("Numero ingresado incorrecto: 'L' (V, L, D) no pueden restar.");
    });

    test('debe lanzar error si "D" resta (ej: DM)', () => {
      expect(() => {
        convertirARomano(strToArray("DM")); // 500
      }).toThrow("Numero ingresado incorrecto: 'D' (V, L, D) no pueden restar.");
    });

    // Regla: 'I' solo resta a 'V' y 'X'
    test('debe lanzar error si "I" resta a "L" (IL)', () => {
      expect(() => {
        convertirARomano(strToArray("IL")); // 49
      }).toThrow("Numero ingresado incorrecto: 'I' solo puede restar a 'V' y 'X'.");
    });
    
    test('debe lanzar error si "I" resta a "C" (IC)', () => {
        expect(() => {
          convertirARomano(strToArray("IC")); // 99
        }).toThrow("Numero ingresado incorrecto: 'I' solo puede restar a 'V' y 'X'.");
    });

    test('debe lanzar error si "I" resta a "M" (IM)', () => {
        expect(() => {
          convertirARomano(strToArray("IM")); // 999
        }).toThrow("Numero ingresado incorrecto: 'I' solo puede restar a 'V' y 'X'.");
    });

    // Regla: 'X' solo resta a 'L' y 'C'
    test('debe lanzar error si "X" resta a "D" (XD)', () => {
      expect(() => {
        convertirARomano(strToArray("XD")); // 490
      }).toThrow("Numero ingresado incorrecto: 'X' solo puede restar a 'L' y 'C'.");
    });

    test('debe lanzar error si "X" resta a "M" (XM)', () => {
        expect(() => {
          convertirARomano(strToArray("XM")); // 990
        }).toThrow("Numero ingresado incorrecto: 'X' solo puede restar a 'L' y 'C'.");
    });

    // Regla: 'C' solo resta a 'D' y 'M'
    // (No hay casos inválidos para 'C' porque no hay símbolos mayores 
    // a 'M' a los que 'C' podría intentar restar incorrectamente)
  });

  // --- Casos Borde ---
  describe('Casos borde', () => {
    test('debe devolver 0 para un array vacío', () => {
      expect(convertirARomano([])).toBe(0);
    });

    test('debe devolver NaN si el array contiene caracteres no romanos', () => {
      // La función asume que los caracteres son válidos
      expect(convertirARomano(strToArray("A"))).toBeNaN();
    });
  });
});