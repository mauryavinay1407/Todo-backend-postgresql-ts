import {Pool} from "pg";
require('dotenv').config();

export const pool=new Pool({
    connectionString: process.env.DATABASE_URL
})

export const connectDB=async()=>{
    
   try {
     await pool.query(
            `
             CREATE TABLE IF NOT EXISTS todos (
                 id SERIAL PRIMARY KEY,
                 title VARCHAR(255) NOT NULL,
                 description VARCHAR(255) NOT NULL
             );
             `
            );
            console.log("Database schema initialized successfully!");
    } catch (error) {
       console.log("The database is not connected properly",error);
       throw error;
   } 
}

