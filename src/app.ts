
import 'dotenv/config';

import cors from 'cors';
import { router } from './routes';
import { db } from './lib/db';
import express from 'express';


const PORT = process.env.PORT || 3002;

const app = express();

app.use(cors());
app.use(express.json());

app.use('/api', router);

main();

async function main() {
  try {
    await db.$connect();
    console.log('✅ Conectado a la base de datos con Prisma');

    app.listen(PORT, () => {
      console.log(`🚀 Servidor corriendo en http://localhost:${PORT}`);
    });
  } catch (error) {
    console.error('❌ Error al conectar con la base de datos:', error);
    process.exit(1); // Salir si no hay conexión a la base de datos
  }
}