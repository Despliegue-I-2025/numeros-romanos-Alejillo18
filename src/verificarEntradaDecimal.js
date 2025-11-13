import { BadRequestError } from "./apiError.js";

function verificarEntradaDecimal(string,path){
    const numero = Number(string);
    if(isNaN(numero)) {throw new BadRequestError("Numero ingresado Incorrecto, debe ser un numero en sistema decimal",path)}
    if(!Number.isInteger(numero)) {throw new BadRequestError("Numero ingresado Incorrecto, el numero debe ser un entero",path);}
    if (numero < 1 || numero > 3999) {throw new BadRequestError("Numero ingresado Incorrecto, debe ser un numero entre 1 y 3999",path)}
    return numero
}

export default verificarEntradaDecimal