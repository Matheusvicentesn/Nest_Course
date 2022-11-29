import { DataSource } from 'typeorm';

const AppDataSource = new DataSource({
  type: 'postgres',
  host: 'localhost',
  port: 3001,
  username: 'postgres',
  password: 'zero',
  database: 'postgres',
  synchronize: false,
  logging: true,
  entities: ['dist/**/*.entity.js'],

});

export default AppDataSource;
