import express from 'express';
import cors from 'cors';
import * as dotenv from 'dotenv'

import userRouter from "./routes/user.routes.js"
import courseRouter from "./routes/course.routes.js"
import contentRouter from "./routes/content.routes.js"

dotenv.config();
const app = express();


// Configura middleware y opciones de la aplicación
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors({
    origin: 'http://localhost:3001', // Reemplaza con la URL del frontend
    credentials: true, // Agrega esta opción para permitir el envío de cookies y encabezados de autenticación
  }));

// Configura tus rutas
app.use('/api', (req,res, next) => {
    next()
}); // Utiliza el prefijo '/api' para tus rutas

app.use('/api/users', userRouter);
app.use('/api/courses',courseRouter);
app.use('/api/content', contentRouter)



export default app;
