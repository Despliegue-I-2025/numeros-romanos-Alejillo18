import verificarSimbolosRomanos from "./verificarSimbolosRomanos.js"
import convertirRomanoADecimal from "./convertirRomanoADecimal.js"
function convertirEntradaRomano(array){
    try{
        verificarSimbolosRomanos(array)
        const NROMANO = convertirRomanoADecimal(array)
        return NROMANO;
    }
    catch(error)
    {
        throw new Error(`Error: ${error.message}`)
    }
}
export default convertirEntradaRomano