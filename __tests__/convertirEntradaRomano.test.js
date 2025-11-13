import convertirEntradaRomano from '../src/convertirEntradaRomanos.js';
import verificarSimbolosRomanos from "../src/verificarSimbolosRomanos.js";
import convertirRomanoADecimal from "../src/convertirRomanoADecimal.js";

jest.mock("../src/verificarSimbolosRomanos.js");
jest.mock("../src/convertirRomanoADecimal.js");

const strToArray = (str) => Array.from(str);

describe('convertirEntradaRomano (Orquestador)', () => {

  beforeEach(() => {
    verificarSimbolosRomanos.mockClear();
    convertirRomanoADecimal.mockClear();
  });

  test('debe llamar a verificar y convertir, y devolver el número final', () => {
    const arrayValido = strToArray("MCMXCIV");
    
    verificarSimbolosRomanos.mockImplementation(() => {}); 
    convertirRomanoADecimal.mockReturnValue(1994);
    
    const resultado = convertirEntradaRomano(arrayValido);

    expect(verificarSimbolosRomanos).toHaveBeenCalledWith(arrayValido, undefined);
    expect(convertirRomanoADecimal).toHaveBeenCalledWith(arrayValido, undefined);
    expect(resultado).toBe(1994);
  });

  test('debe lanzar un error formateado si la verificación de símbolos falla', () => {
    const arrayInvalido = strToArray("IIII");
    const errorOriginal = new Error("Numero ingresado incorrecto");

    verificarSimbolosRomanos.mockImplementation(() => {
      throw errorOriginal;
    });

    expect(() => {
      convertirEntradaRomano(arrayInvalido);
    }).toThrow("Numero ingresado incorrecto");

    expect(convertirRomanoADecimal).not.toHaveBeenCalled();
  });
});