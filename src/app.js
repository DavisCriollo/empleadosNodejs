
import   express from "express"


import   empleadosRoutes from "./routes/empleados.routes.js"
import   usuariosRoutes from "./routes/usuarios.routes.js"
import   indexRoutes from "./routes/index.routes.js"

// import path from "path"; // Importa el módulo path
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express()

app.use(express.json())


// Define el middleware para servir archivos estáticos desde la carpeta "public"
// app.use(express.static(path.join(__dirname, 'public')));


// Define el middleware para servir archivos estáticos desde la carpeta "public"
app.use(express.static(__dirname + '/public'));


app.use(indexRoutes)
app.use('/api',empleadosRoutes)
app.use('/api',usuariosRoutes)
//SI EL USUARIO INGRESA A UNA PAGINA Q NO EXISTE


app.use((req,res,next)=>{
    res.status(400).json({
        "msg":'La página no existe'
    })
})
export default app;



// import   path from "path"
// const paths = path.resolve(__dirname,'public')

// app.use(express.static(paths));