import express from "express"
import convertirEntradaRomanos from "./src/convertirEntradaRomanos.js";
import verificarEntradaRomanos from "./src/verificarEntradaRomanos.js";
import convertirDecimalARomano from "./src/convertirDecimalARomano.js";
import verificarEntradaDecimal from "./src/verificarEntradaDecimal.js"

const PORT = 8080;


const app = express();
app.use(express.json())


app.get("/romano/:Rnumber",(req,res)=>{
    try{
        const RNUMBER = req.params.Rnumber;
        const arrayRomano = verificarEntradaRomanos(RNUMBER);
        const numero =  convertirEntradaRomanos(arrayRomano);
        res.status(200).json({state:true, numero, message: "Numero Convertido Correctamente"})
    }
    catch(error){
        //Error por parte del cliente
        if (error.message.includes("Numero ingresado Incorrecto")) {res.status(400).json({state:false, error: error.message})}
        //En caso de no ser error del cliente, asumimos un posible error del lado del servidor
       else{res.status(500).json({state:false, message : error.message})}
    }
})


app.get("/decimal/:Dnumber", (req,res)=>{
    try{
        const DNUMBER = req.params.Dnumber;
        const NUMEROD = verificarEntradaDecimal(DNUMBER)
        const numero = convertirDecimalARomano(NUMEROD)
        res.status(200).json({state:true, numero, message: "Numero convertido Correctamente"})
    }
    catch(error){
        if (error.message.includes("Numero ingresado Incorrecto")) {res.status(400).json({state:false, error: error.message})}
        else{res.status(500).json({state:false, message : error.message})}
    }
})
app.listen(PORT,()=>{
    console.log(`Servidor Iniciado en el puerto ${PORT}`)
})