import { BadRequestError } from './apiError.js';

function verificarEntradaRomanos(string,path){
    /* Si es un string vacio, error. si no es string, tambien */
    if(typeof string !== "string" || string.length === 0 ) throw new BadRequestError("Ingresaste incorrectamente el valor romano, intenta nuevamente", path)
    const romanos = ["I", "V", "X", "L", "C", "D", "M"]
//Convertimos string en array:
const arrayRomano = Array.from(string.toUpperCase());
    arrayRomano.forEach(l => {
        if(!romanos.includes(l)) throw new BadRequestError(`Numero ingresado incorrecto, contiene simbolos erroneos: ${l}`,path)
    })
return arrayRomano
}


export default verificarEntradaRomanos