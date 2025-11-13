import express from "express"
import convertirEntradaRomanos from "./src/convertirEntradaRomanos.js";
import verificarEntradaRomanos from "./src/verificarEntradaRomanos.js";
import convertirDecimalARomano from "./src/convertirDecimalARomano.js";
import verificarEntradaDecimal from "./src/verificarEntradaDecimal.js"
import errorMiddleware from "./src/errorMiddleware.js";


const PORT = 8080;


const app = express();
app.use(express.json())



app.get("/r2a/:Rnumber",(req,res,next)=>{
    try{
        const path = req.originalUrl;
        const RNUMBER = req.params.Rnumber;
        const arrayRomano = verificarEntradaRomanos(RNUMBER, path);
        const numero =  convertirEntradaRomanos(arrayRomano, path);
        res.status(200).json({state:true, numero, message: "Numero Convertido Correctamente"})
    }
    catch(error){
        next(error)
    }
})


app.get("/a2r/:Dnumber", (req,res,next)=>{
    try{
        const path = req.originalUrl;
        const DNUMBER = req.params.Dnumber;
        const NUMEROD = verificarEntradaDecimal(DNUMBER,path)
        const numero = convertirDecimalARomano(NUMEROD,path)
        res.status(200).json({state:true, numero, message: "Numero convertido Correctamente"})
    }
    catch(error){
        next(error)
    }
})


app.use(errorMiddleware);

app.listen(PORT,()=>{
    console.log(`Servidor Iniciado en el puerto ${PORT}`)
})