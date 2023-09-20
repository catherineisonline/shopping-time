import mysql from "sql2";
import dotenv from "dotenv";
dotenv.config();

const database = process.env.REACT_APP_DATABASE_UR;

const connection = mysql.createConnection(database);

export default connection.promise();