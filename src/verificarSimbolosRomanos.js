function verificarSimbolosRomanos(array){
    //Primeros verificamos aparicion de cada letra, ya que I,X,C y M 
        // pueden repetirse hasta 3 veces juntas y V, L y D no y luego sumamos o restamos al total segun
        // numero siguiente
array.forEach((l,i) => {
    if(["V", "L", "D"].includes(l)){
        if(array[i + 1] === array[i]) throw new Error("Numero ingresado incorrecto")
    }
    else if(["I", "X", "C", "M"].includes(l)){
        if (array[i] === array[i+1] && array[i] === array[i+2] && array[i] === array[i+3])throw new Error("Numero ingresado incorrecto")
    }
 })
}

export default verificarSimbolosRomanos