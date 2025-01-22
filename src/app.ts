import express from 'express';
import { connection, pool } from './db/conexion';
import userRoutes from './usuarios/user.routes';
import rolesRoutes from './roles/roles.routes'
import contactosRoutes from './contactos/contactos.routes'
import estadoPedidos from './estados-pedidos/estados-pedidos.routes'
import zonasRoutes from './zonas/zonas.routes'


const app = express();
const port = 3000;

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


connection.initialize()
  .then(() => {
    console.log('Data Source inicializado correctamente');
  })
  .catch((error) => console.error('Error al inicializar Data Source:', error));

app.listen(port, () => {
  return console.log(`Express is listening at http://localhost:${port}`);
});