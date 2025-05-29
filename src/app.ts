
import 'dotenv/config';

import express from 'express';
import cors from 'cors';
import { router } from './routes';
import { db } from './lib/db';


const PORT = process.env.PORT || 3002;

const app = express();

app.use(cors());
app.use(router);



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