import convertirEntradaRomano from '../src/convertirEntradaRomanos.js';
// Importamos los mocks de los módulos que llama
import verificarSimbolosRomanos from "../src/verificarSimbolosRomanos.js";
import convertirARomano from "../src/convertirARomano.js";

// Creamos los mocks
jest.mock("../src/verificarSimbolosRomanos.js");
jest.mock("../src/convertirARomano.js");

// Helper para convertir string a array
const strToArray = (str) => Array.from(str);

describe('convertirEntradaRomano (Orquestador)', () => {

  // Limpiamos los mocks antes de cada test
  beforeEach(() => {
    verificarSimbolosRomanos.mockClear();
    convertirARomano.mockClear();
  });

  test('debe llamar a verificar y convertir, y devolver el número final', () => {
    const arrayValido = strToArray("MCMXCIV");
    
    // Configuramos el mock de conversión para que devuelva el número esperado
    convertirARomano.mockReturnValue(1994);
    
    // Ejecutamos la función
    const resultado = convertirEntradaRomano(arrayValido);

    // Verificamos
    expect(verificarSimbolosRomanos).toHaveBeenCalledWith(arrayValido);
    expect(convertirARomano).toHaveBeenCalledWith(arrayValido);
    expect(resultado).toBe(1994);
  });

  test('debe lanzar un error formateado si la verificación de símbolos falla', () => {
    const arrayInvalido = strToArray("IIII");
    const errorOriginal = new Error("Numero ingresado incorrecto");

    // Configuramos el mock de verificación para que lance un error
    verificarSimbolosRomanos.mockImplementation(() => {
      throw errorOriginal;
    });

    // Verificamos que la función orquestadora atrape y relance el error
    // con el formato "Error: [mensaje original]"
    expect(() => {
      convertirEntradaRomano(arrayInvalido);
    }).toThrow("Error: Numero ingresado incorrecto");

    // Verificamos que la función de conversión NUNCA fue llamada
    expect(convertirARomano).not.toHaveBeenCalled();
  });
});