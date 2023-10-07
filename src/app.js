
import   express from "express"

import   empleadosRoutes from "./routes/empleados.routes.js"
import   indexRoutes from "./routes/index.routes.js"


const app = express()

app.use(express.json())

app.use(indexRoutes)
app.use('/api',empleadosRoutes)
//SI EL USUARIO INGRESA A UNA PAGINA Q NO EXISTE


app.use((req,res,next)=>{
    res.status(400).json({
        "msg":'La página no existe'
    })
})
export default app;