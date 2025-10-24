import convertirRomanoADecimal from '../src/convertirRomanoADecimal.js';

const strToArray = (str) => Array.from(str);

describe('convertirRomanoADecimal', () => {

  describe('Casos de conversión válida', () => {
    test('debe convertir números simples (solo suma)', () => {
      expect(convertirRomanoADecimal(strToArray("I"))).toBe(1);
      expect(convertirRomanoADecimal(strToArray("VI"))).toBe(6);
      expect(convertirRomanoADecimal(strToArray("MDCLXVI"))).toBe(1666);
    });

    test('debe convertir números con resta (válida)', () => {
      expect(convertirRomanoADecimal(strToArray("IV"))).toBe(4);
      expect(convertirRomanoADecimal(strToArray("IX"))).toBe(9);
      expect(convertirRomanoADecimal(strToArray("XL"))).toBe(40);
      expect(convertirRomanoADecimal(strToArray("XC"))).toBe(90);
      expect(convertirRomanoADecimal(strToArray("CD"))).toBe(400);
      expect(convertirRomanoADecimal(strToArray("CM"))).toBe(900);
    });

    test('debe convertir números complejos (válidos)', () => {
      expect(convertirRomanoADecimal(strToArray("MCMXCIV"))).toBe(1994);
      expect(convertirRomanoADecimal(strToArray("CDXLIV"))).toBe(444);
    });
  });

  describe('Casos de error (restas inválidas)', () => {

    test('debe lanzar error si "V" resta (ej: VX)', () => {
      expect(() => {
        convertirRomanoADecimal(strToArray("VX"));
      }).toThrow("Numero ingresado incorrecto: 'V' (V, L, D) no pueden restar.");
    });

    test('debe lanzar error si "L" resta (ej: LD)', () => {
      expect(() => {
        convertirRomanoADecimal(strToArray("LD"));
      }).toThrow("Numero ingresado incorrecto: 'L' (V, L, D) no pueden restar.");
    });

    test('debe lanzar error si "D" resta (ej: DM)', () => {
      expect(() => {
        convertirRomanoADecimal(strToArray("DM"));
      }).toThrow("Numero ingresado incorrecto: 'D' (V, L, D) no pueden restar.");
    });

    test('debe lanzar error si "I" resta a "L" (IL)', () => {
      expect(() => {
        convertirRomanoADecimal(strToArray("IL"));
      }).toThrow("Numero ingresado incorrecto: 'I' solo puede restar a 'V' y 'X'.");
    });
    
    test('debe lanzar error si "I" resta a "C" (IC)', () => {
        expect(() => {
          convertirRomanoADecimal(strToArray("IC"));
        }).toThrow("Numero ingresado incorrecto: 'I' solo puede restar a 'V' y 'X'.");
    });

    test('debe lanzar error si "I" resta a "M" (IM)', () => {
        expect(() => {
          convertirRomanoADecimal(strToArray("IM"));
        }).toThrow("Numero ingresado incorrecto: 'I' solo puede restar a 'V' y 'X'.");
    });

    test('debe lanzar error si "X" resta a "D" (XD)', () => {
      expect(() => {
        convertirRomanoADecimal(strToArray("XD"));
      }).toThrow("Numero ingresado incorrecto: 'X' solo puede restar a 'L' y 'C'.");
    });

    test('debe lanzar error si "X" resta a "M" (XM)', () => {
        expect(() => {
          convertirRomanoADecimal(strToArray("XM"));
        }).toThrow("Numero ingresado incorrecto: 'X' solo puede restar a 'L' y 'C'.");
    });

  });

  describe('Casos borde', () => {
    test('debe devolver 0 para un array vacío', () => {
      expect(convertirRomanoADecimal([])).toBe(0);
    });

    test('debe devolver NaN si el array contiene caracteres no romanos', () => {
      expect(convertirRomanoADecimal(strToArray("A"))).toBeNaN();
    });
  });
});
