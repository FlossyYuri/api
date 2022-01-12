import { MysqlConnectionOptions } from 'typeorm/driver/mysql/MysqlConnectionOptions';
const config: MysqlConnectionOptions = {
  type: 'mysql',
  host: 'localhost',
  port: 3306,
  username: 'root',
  password: '',
  database: 'gobazar',
  entities: ['dist/src/**/*.entity.js'],
  migrations: ['dist/src/db/migrations/*.js'],
  synchronize: true,
};

export default config;
