import express, { Request, Response, NextFunction } from 'express';
import 'reflect-metadata'; // Necesario para class-transformer
import { connection, pool } from './db/conexion';

import userRoutes from './usuarios/user.routes';
import rolesRoutes from './roles/roles.routes'
import contactosRoutes from './contactos/contactos.routes'
import estadoPedidos from './estados-pedidos/estados-pedidos.routes'
import zonasRoutes from './zonas/zonas.routes'
import lugaresRoutes from './lugares/lugares.routes'

import dotenv from "dotenv";



const app = express();
const port = 3000;

app.use(express.json());

dotenv.config({path: '.env'});

// Middleware para manejar datos de formularios (si los necesitas)
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  res.send('Hello World!');
});

(async () => {
  try {
    await pool.query("SELECT 1");
    console.log("conexión establecida");
  } catch (error) {
    console.error("error de conexión: ", error);
  }
})();

app.use('/user', userRoutes);
app.use('/roles', rolesRoutes);
app.use('/contactos', contactosRoutes);
app.use('/estado-pedidos', estadoPedidos);
app.use('/zonas', zonasRoutes);
app.use('/lugares', lugaresRoutes);

// Middleware de manejo de errores
app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  console.error(err);
  res.status(500).send('Internal Server Error');
});


// connection.initialize()
//   .then(() => {
//     console.log('Data Source inicializado correctamente');
//   })
//   .catch((error) => console.error('Error al inicializar Data Source:', error));

app.listen(port, () => {
  return console.log(`Express is listening at http://localhost:${port}`);
});