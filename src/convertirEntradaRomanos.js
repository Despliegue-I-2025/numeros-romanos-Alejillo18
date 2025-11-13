import verificarSimbolosRomanos from "./verificarSimbolosRomanos.js"
import convertirRomanoADecimal from "./convertirRomanoADecimal.js"
import { BadRequestError } from "./apiError.js";
import convertirDecimalARomano from "./convertirDecimalARomano.js";

function convertirEntradaRomano(array,path){
        verificarSimbolosRomanos(array,path)
        const NROMANO = convertirRomanoADecimal(array,path)
        const formaCanonica = convertirDecimalARomano(NROMANO,path)
        const entradaOriginal = array.join("")
        if(formaCanonica !== entradaOriginal){
                throw new BadRequestError(`El número romano no es canónico (mal formado). La forma correcta es: ${formaCanonica}`,path)
        }
        return NROMANO;

       
        
}
export default convertirEntradaRomano