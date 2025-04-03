import express from 'express';
import cors from 'cors';
import alumnosRoutes from './routes/alumnos.routes.js';
import indexRoutes from './routes/index.routes.js';
import gruposRoutes from  './routes/grupos.routes.js';
import { PORT } from "../config.js";

const app = express();

app.use(cors());
app.use(express.json());


app.use(indexRoutes);
app.use('/api',gruposRoutes);
app.use(alumnosRoutes);

app.use((req,res,next) =>{
 res.status(404).json({
    message: 'Ruta no encontrada'
 }) 

}
)

app.listen(PORT);
console.log(`servidor ejecutandose ${PORT}`);