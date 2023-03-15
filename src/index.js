import express from 'express';
import router from './routes.js';

const app = express();
const port = 8080;

app.use(express.json());
app.use('/api', router);

app.listen(port, () => {
  console.log(`Servidor arriba en el puerto ${port}`);
});

