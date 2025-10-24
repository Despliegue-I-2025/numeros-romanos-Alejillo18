import verificarSimbolosRomanos from "./verificarSimbolosRomanos.js"
import convertirARomano from "./convertirARomano.js"
function convertirEntradaRomano(array){
    try{
        verificarSimbolosRomanos(array)
        const NROMANO = convertirARomano(array)
        return NROMANO;
    }
    catch(error)
    {
        throw new Error(`Error: ${error.message}`)
    }
}
export default convertirEntradaRomano