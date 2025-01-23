import { DataSource } from "typeorm";
import dotenv from "dotenv"
dotenv.config();

const Pool = require('pg').Pool

export const pool = new Pool({
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  database: process.env.DB_DATABASE,
  password: process.env.DB_PASSWORD,
  port: process.env.DB_PORT,
});

export const connection = new DataSource({
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'postgres',
  password: '2506',
  database: 'pedidos',
  // entities: [User],
  entities: ['../**/*.entity.{ts,js}'],

  synchronize: true,
});



