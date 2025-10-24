import express from "express"
import convertirEntradaRomano from "./src/convertirEntradaRomanos.js";
import verificarEntradaRomanos from "./src/verificarEntradaRomanos.js";

const PORT = 8080;


const app = express();
app.use(express.json())


app.get("/romano/:Rnumber",(req,res)=>{
    try{
        const RNUMBER = req.params.Rnumber;
        const arrayRomano = verificarEntradaRomanos(RNUMBER);
        const numero =  convertirEntradaRomano(arrayRomano);
        res.status(200).json({state:true, numero, message: "Numero Convertido Correctamente"})
    }
    catch(error){
        //Error por parte del cliente
        if (error.message ===("Numero ingresado Incorrecto")) res.status(400).json({state:false, error: error.message})
        //En caso de no ser error del cliente, asumimos un posible error del lado del servidor
        res.status(500).json({state:false, message : error.message})
    }
})


/* app.get("/decimal/:Dnumber", (req,res)=>{
    try{
        const DNUMBER = req.params.Dnumber;
        const arrayDecimal = verificarEntradaDecimal(DNUMBER)
    }
    catch(error){
        if (error.message ===("Numero ingresado Incorrecto")) res.status(400).json({state:false, error: error.message})
        res.status(500).json({state:false, message : error.message})
    }
})
 */

app.listen(PORT,()=>{
    console.log(`Servidor Iniciado en el puerto ${PORT}`)
})