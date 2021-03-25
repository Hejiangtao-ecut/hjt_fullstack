import dotenv from 'dotenv'
dotenv.config()
// SET PORT = 1234 && node app.js cross-env

console.log(process.env);

export const { APP_PORT } = process.env; // ?

export const  {
    MYSQL_PORT,
    MYSQL_HOST,
    MYSQL_USER,
    MYSQL_PASSWORD,
    MYSQL_DATABASE
} = process.env