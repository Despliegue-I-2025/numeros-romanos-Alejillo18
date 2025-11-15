import express from "express"
import convertirEntradaRomanos from "./src/convertirEntradaRomanos.js";
import verificarEntradaRomanos from "./src/verificarEntradaRomanos.js";
import convertirDecimalARomano from "./src/convertirDecimalARomano.js";
import verificarEntradaDecimal from "./src/verificarEntradaDecimal.js"
import errorMiddleware from "./src/errorMiddleware.js";
import { BadRequestError } from "./src/apiError.js";


const PORT = 8080;


const app = express();
app.use(express.json())



app.get("/r2a",(req,res,next)=>{
    try{
        const path = req.originalUrl;
        const RNUMBER = req.query.roman;
        if(!RNUMBER) throw new BadRequestError("Se necesita el parametro roman, por ejemplo GET/r2a?roman=IV",path)
        const arrayRomano = verificarEntradaRomanos(RNUMBER, path);
        const numero =  convertirEntradaRomanos(arrayRomano, path);
        res.status(200).json({roman:numero})
    }
    catch(error){
        next(error)
    }
})


app.get("/a2r", (req,res,next)=>{
    try{
        const path = req.originalUrl;
        const DNUMBER = req.query.arabic;
        if(!DNUMBER) throw new BadRequestError("Se necesita el parametro arabig, por ejemplo GET/a2r?arabig=10",path)
        const NUMEROD = verificarEntradaDecimal(DNUMBER,path)
        const numero = convertirDecimalARomano(NUMEROD,path)
        res.status(200).json({arabic : numero})
    }
    catch(error){
        next(error)
    }
})


app.use(errorMiddleware);

app.listen(PORT,()=>{
    console.log(`Servidor Iniciado en el puerto ${PORT}`)
})