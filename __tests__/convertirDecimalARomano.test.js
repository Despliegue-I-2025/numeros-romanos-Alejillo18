import convertirDecimalARomano from '../src/convertirDecimalARomano.js';

describe('convertirDecimalARomano', () => {

  test('debe convertir 1 a "I"', () => {
    expect(convertirDecimalARomano(1)).toBe("I");
  });

  test('debe convertir 3 a "III"', () => {
    expect(convertirDecimalARomano(3)).toBe("III");
  });

  test('debe convertir 15 a "XV"', () => {
    expect(convertirDecimalARomano(15)).toBe("XV");
  });

  test('debe convertir 3000 a "MMM"', () => {
    expect(convertirDecimalARomano(3000)).toBe("MMM");
  });

  test('debe convertir 4 a "IV"', () => {
    expect(convertirDecimalARomano(4)).toBe("IV");
  });

  test('debe convertir 9 a "IX"', () => {
    expect(convertirDecimalARomano(9)).toBe("IX");
  });

  test('debe convertir 40 a "XL"', () => {
    expect(convertirDecimalARomano(40)).toBe("XL");
  });

  test('debe convertir 90 a "XC"', () => {
    expect(convertirDecimalARomano(90)).toBe("XC");
  });

  test('debe convertir 400 a "CD"', () => {
    expect(convertirDecimalARomano(400)).toBe("CD");
  });

  test('debe convertir 900 a "CM"', () => {
    expect(convertirDecimalARomano(900)).toBe("CM");
  });

  test('debe convertir 444 a "CDXLIV"', () => {
    expect(convertirDecimalARomano(444)).toBe("CDXLIV");
  });

  test('debe convertir 1994 a "MCMXCIV"', () => {
    expect(convertirDecimalARomano(1994)).toBe("MCMXCIV");
  });

  test('debe convertir 3999 a "MMMCMXCIX"', () => {
    expect(convertirDecimalARomano(3999)).toBe("MMMCMXCIX");
  });

  test('debe convertir 0 a un string vacío', () => {
    expect(convertirDecimalARomano(0)).toBe("");
  });

});