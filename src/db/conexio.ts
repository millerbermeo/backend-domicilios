import { User } from "../entities/user.entity";
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