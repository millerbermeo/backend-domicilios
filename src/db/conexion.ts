import { DataSource } from "typeorm";

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


const Pool = require('pg').Pool
export const pool = new Pool({
  type: 'postgres',
  user: 'postgres',
  host: 'localhost',
  database: 'pedidos',
  password: '2506',
  port: 5432,
})

