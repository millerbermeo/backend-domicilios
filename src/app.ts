import express from 'express';
import { connection } from './db/conexio';
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Hello World!');
});


connection.initialize()
  .then(() => {
    console.log('Data Source inicializado correctamente');
  })
  .catch((error) => console.error('Error al inicializar Data Source:', error));

app.listen(port, () => {
  return console.log(`Express is listening at http://localhost:${port}`);
});