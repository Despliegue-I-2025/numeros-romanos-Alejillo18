function verificarSimbolosRomanos(array){
    //Primeros verificamos aparicion de cada letra, ya que I,X,C y M 
        // pueden repetirse hasta 3 veces juntas y V, L y D no y luego sumamos o restamos al total segun
        // numero siguiente
array.forEach((l,i) => {
    if(["V", "L", "D"].includes(l)){
        if(array[i + 1] === array[i]) throw new Error("Numero ingresado incorrecto, los simbolos V,L y D no se pueden agrupar de a dos(2)")
    }
    else if(["I", "X", "C", "M"].includes(l)){
        if (array[i] === array[i+1] && array[i] === array[i+2] && array[i] === array[i+3])throw new Error("Numero ingresado incorrecto, los simbolos I,X, C y M no se pueden agrupar de a cuatro(4)")
    }
 })
}

export default verificarSimbolosRomanos