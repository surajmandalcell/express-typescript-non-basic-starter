import mysql, { PoolConfig } from 'mysql';

const config: PoolConfig = {
  host: process.env.SQL_HOST,
  port: Number(process.env.SQL_PORT),
  user: process.env.SQL_USER,
  password: process.env.SQL_PASSWORD,
  database: process.env.SQL_DATABASE,
  connectionLimit: Number(process.env.SQL_CONNECTION_LIMIT),
  multipleStatements: !process.env.SQL_MULTIPLESTATEMENTS,
};

const pool = mysql.createPool(config);

export default pool;
