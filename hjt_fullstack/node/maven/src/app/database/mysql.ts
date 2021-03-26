import mysql from 'mysql2'; // 端口号 3306
import {
    MYSQL_HOST, MYSQL_PORT, MYSQL_PASSWORD, MYSQL_DATABASE, MYSQL_USER
} from '../app.config';
export const connection = mysql.createConnection({
    host: MYSQL_HOST,
    port: parseInt(MYSQL_PORT),
    user: MYSQL_USER,
    password: MYSQL_PASSWORD,
    database: MYSQL_DATABASE
})