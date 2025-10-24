function verificarEntradaRomanos(string){
    /* Si es un string vacio, error. si no es string, tambien */
    if(typeof string !== "string" || string.length === 0 ) throw new Error("Numero ingresado incorrecto")
    const romanos = ["I", "V", "X", "L", "C", "D", "M"]
//Convertimos string en array:
const arrayRomano = Array.from(string);
    arrayRomano.forEach(l => {
        if(!romanos.includes(l)) throw new Error("Numero ingresado incorrecto, contiene simbolos erroneos")
    })
return arrayRomano
}


export default verificarEntradaRomanos