function verificarEntradaDecimal(string){
    const numero = Number(string);
    if(isNaN(numero)) {throw new Error("Numero ingresado Incorecto, debe ser un numero en sistema decimal")}
    if(!Number.isInteger(numero)) {throw new Error("Numero ingresado Incorecto, el numero debe ser un entero");}
    if (numero < 1 || numero > 3999) {throw new Error("Numero ingresado Incorecto, debe ser un numero entre 1 y 3999")}
    return numero
}

export default verificarEntradaDecimal