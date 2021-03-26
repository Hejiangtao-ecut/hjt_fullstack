import dotenv from 'dotenv';
dotenv.config();
console.log(process.env);

export const { APP_PORT } = process.env
export const {
    MYSQL_HOST, MYSQL_PORT, MYSQL_PASSWORD, MYSQL_DATABASE,MYSQL_USER
} = process.env