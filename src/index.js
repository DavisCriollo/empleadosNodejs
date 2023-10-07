import app  from './app.js'
import { PORT } from './config.js';

app.listen(PORT)
console.log('EL SERVER ESTA ESCUCHANDO EN EL PUERTO',PORT);
